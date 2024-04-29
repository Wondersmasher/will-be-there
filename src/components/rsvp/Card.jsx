import { useState } from "react";
import FriendInputs from "./FriendInputs";
import { Button } from "../common";
import Modal from "./Modal";
import { usePost } from "../../utils/hooks";
import showToast from "../../utils/showToast";
const noData = [
  {
    children: (
      <p className='text-3xl  font-extrabold  font-caveat md:text-6xl text-center'>
        Next Time Hopefully!
      </p>
    ),
    parentClassName: "bg-wybt-white",
  },
];

const Card = ({ data }) => {
  const { guest, event } = data;
  const [friends, setFriends] = useState([]);
  const [option, setOption] = useState("yes");
  const [modalData, setModalData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [itemsToBring, setItemsToBring] = useState([]);
  const [myself, setMyself] = useState({
    firstName: "",
    lastName: "",
    email: "",
    congratulatoryMessage: "",
  });
  const { postData } = usePost();

  const yesData = [
    {
      children: (
        <div className=' flex flex-col gap-4 md:gap-6 justify-center items-center'>
          <p className='text-3xl font-extrabold  font-caveat md:text-6xl text-center'>
            Woo-hoo!
          </p>
          <p>Thanks for confirming your spot</p>
        </div>
      ),
      parentClassName: "bg-yes-modal bg-no-repeat bg-cover bg-center",
    },
    {
      children: (
        <div className='absolute bottom-0 bg-wybt-primary w-full h-[50%] flex flex-col gap-4 justify-center items-center text-3xl  font-extrabold  font-caveat md:text-6xl text-center text-white'>
          <p>{event.location}</p>
        </div>
      ),
      parentClassName: "bg-yes-modal bg-no-repeat bg-cover ",
    },
    {
      children: (
        <p className='text-3xl  font-extrabold font-caveat md:text-6xl text-center'>
          See you there
        </p>
      ),
      parentClassName: "bg-yes-modal bg-no-repeat bg-cover bg-center",
    },
  ];
  const handleMyselfChange = (e) => {
    const { name, value } = e.target;
    setMyself((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleAddFriend = () => {
    setFriends((previousFriends) => [
      ...previousFriends,
      { firstName: "", lastName: "", email: "" },
    ]);
  };

  const handleRemoveFriend = () => {
    setFriends((previousFriends) => previousFriends.slice(0, -1));
  };

  const handleInputsChange = (index, key, value) => {
    const newFriends = [...friends];
    newFriends[index] = { ...newFriends[index], [key]: value };
    setFriends(newFriends);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      import.meta.env.VITE_BASE_URL +
        `/events/rsvp/${event.id}${guest ? `?guest=${guest._id}` : ""}`
    );
    try {
      if (option === "no") {
        // post attending to false
        const { data } = await postData(
          import.meta.env.VITE_BASE_URL +
            `/events/rsvp/${event.id}${guest ? `?guest=${guest._id}` : ""}`,
          guest
            ? {
                attending: false,
                message: myself.congratulatoryMessage,
                plus_ones: [],
                items: [],
              }
            : {
                name: `${myself.firstName} ${myself.lastName}`,
                email: myself.email.toLowerCase(),
                attending: false,
                message: myself.congratulatoryMessage,
                plus_ones: [],
                items: [],
              }
        );
        if (data) {
          setModalData(noData);
          setIsOpened(true);
          console.log(data, "data from the post request");
          showToast.success(
            "Thanks for letting us know. \n Next time hopefully!"
          );
        }

        return;
      }
      let isValid = true;
      friends.map((_, index) => {
        const form = document.getElementById(`form-${index}`);
        if (!form.checkValidity()) {
          isValid = false;
          form.reportValidity();
          return;
        }
      });

      //
      if (isValid) {
        // post attending to true and list of friends if any in an array
        const friendListToPost = friends.map((friend) => ({
          name: `${friend.firstName} ${friend.lastName}`,
          // email: friend.email.toLowerCase(),
        }));
        const { data } = await postData(
          import.meta.env.VITE_BASE_URL +
            `/events/rsvp/${event.id}${guest ? `?guest=${guest._id}` : ""}`,
          guest
            ? {
                attending: true,
                plus_ones: friendListToPost,
                message: myself.congratulatoryMessage,
                items: itemsToBring,
              }
            : {
                name: `${myself.firstName} ${myself.lastName}`,
                email: myself.email.toLowerCase(),
                attending: true,
                plus_ones: friendListToPost,
                message: myself.congratulatoryMessage,
                items: itemsToBring,
              }
        );
        if (data) {
          setModalData(yesData);
          setIsOpened(true);
          showToast.success("Wishing to see you there for in a while!");
        }
      }
    } catch (error) {
      showToast.error(error.message);
    }
  };

  const handleToggleItemsToBring = (value) => {
    if (itemsToBring.includes(value)) {
      setItemsToBring(itemsToBring.filter((item) => item !== value));
      return;
    } else {
      setItemsToBring((previousItems) => [...previousItems, value]);
    }
  };
  const time = new Date(event.end);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  console.log(event);

  return (
    <main className='flex flex-col gap-8 my-8 md:my-16 font-montserrat w-full md:w-[75%] lg:w-[50%]'>
      <div className='flex flex-col gap-8 max-h-[75vh] overflow-y-auto scrollbar-hide'>
        <div className='bg-wybt-primary text-white py-12 px-6 md:py-16 md:px-8 flex flex-col gap-8 '>
          <h4 className='text-center font-bold text-2xl md:text-4xl '>
            RSVP for {event.name}
          </h4>
          <p className='text-center font-light text-base md:text-xl'>
            Kindly respond before{" "}
            {`${hours} : ${minutes} on ${day} / ${month} / ${year}`}. We look
            forward to celebrating with you.
          </p>
          <p className='text-center text-3xl md:text-5xl font-caveat'>
            Will You Be There?
          </p>
          {guest && (
            <p className='text-center font-bold text-xl md:text-3xl   '>
              {guest.name}
            </p>
          )}
          {option === "yes" && event?.item?.length > 0 && (
            <div className='flex flex-col gap-4 justify-center items-center'>
              <p>Please pick any item you can bring to the event</p>
              <div className='flex flex-wrap gap-4'>
                {event.item &&
                  event.item.map((item, id) => {
                    return (
                      <div key={id} className='flex gap-2'>
                        <input
                          type='checkbox'
                          name={`itemsToBring-${item}`}
                          id={`itemsToBring-${item}`}
                          className='cursor-pointer px-4 py-3 rounded-lg bg-wybt-white w-full focus:outline-none  text-wybt-primary'
                          value={item}
                          onChange={() => handleToggleItemsToBring(item)}
                          checked={itemsToBring.includes(item)}
                        />
                        <label
                          htmlFor={`itemsToBring-${item}`}
                          className='cursor-pointer text-base md:text-xl'
                          onChange={() => handleToggleItemsToBring(item)}
                        >
                          {item}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          <input
            type='text'
            name='congratulatoryMessage'
            id='congratulatoryMessage'
            placeholder='Congratulatory messages'
            className='px-4 py-3 rounded-lg bg-wybt-white w-full focus:outline-none  text-wybt-primary'
            value={myself.congratulatoryMessage}
            onChange={(e) => handleMyselfChange(e)}
          />
          {!guest && (
            <FriendInputs
              friend={myself}
              handleMyselfChange={handleMyselfChange}
              text='Invited'
              id={"0"}
            />
          )}
          <div className='flex gap-4 justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                name='yes'
                id='yes'
                className='cursor-pointer size-5'
                checked={option === "yes"}
                onChange={() => setOption("yes")}
              />
              <label
                htmlFor='yes'
                className='cursor-pointer text-base md:text-xl'
                onChange={() => setOption("yes")}
              >
                Yes, I&apos;ll be there
              </label>
            </div>
            <div className='flex gap-3 items-center'>
              <Button
                className='p-0 text-4xl disabled:cursor-not-allowed disabled:text-wybt-light-gray'
                onClick={handleRemoveFriend}
                disabled={option === "no"}
              >
                -
              </Button>
              <div
                className={`${
                  option === "no" ? "text-wybt-light-gray" : "text-wybt-primary"
                } bg-wybt-white  text-4xl px-4 py-2 font-bold `}
              >
                {friends.length}
              </div>
              <Button
                className='p-0 text-4xl disabled:cursor-not-allowed disabled:text-wybt-light-gray'
                onClick={handleAddFriend}
                disabled={option === "no"}
              >
                +
              </Button>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            {friends.map((friend, id) => (
              <FriendInputs
                key={id}
                friend={friend}
                id={id}
                handleInputsChange={handleInputsChange}
              />
            ))}
          </div>
          <div className='flex gap-2 items-center'>
            <input
              type='checkbox'
              name='no'
              id='no'
              className='cursor-pointer size-5'
              checked={option === "no"}
              onChange={() => {
                setOption("no");
                setFriends([]);
              }}
            />
            <label
              htmlFor='no'
              className='cursor-pointer text-base md:text-xl'
              onChange={() => {
                setOption("no");
                setFriends([]);
              }}
            >
              No, sorry
            </label>
          </div>
        </div>
      </div>
      <Button
        type='submit'
        className='bg-wybt-primary self-center text-wybt-white w-full md:w-[75%] lg:w-[50%]'
        onClick={handleSubmit}
        // disabled={loading}
      >
        Submit
      </Button>

      {isOpened && (
        <Modal isOpen={isOpened} setIsOpen={setIsOpened} data={modalData} />
      )}
    </main>
  );
};
export default Card;
