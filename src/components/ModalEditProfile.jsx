import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { AuthContext } from "../providers/AuthProvider";

const ModalEditProfile = ({ isOpen, setIsOpen }) => {
  const { updateUserProfile, setLoading } = useContext(AuthContext);
  //   console.log(user);
  const handleProfileEdit = (e) => {
    setLoading(true);

    const editedName = e.target.editedName.value;
    const editedPhotoURL = e.target.editedPhotoURL.value;
    // console.log(editedName, editedPhotoURL);
    updateUserProfile(editedName, editedPhotoURL)
      .then((request) => {
        console.log(request.user);
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
        setIsOpen(false);
      });
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-green-600 to-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-green-700 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                You Can Change Your Name And Photo URL
              </h3>
              <div className="flex items-center justify-center text-center">
                <form
                  onSubmit={handleProfileEdit}
                  noValidate=""
                  action=""
                  className="flex flex-col w-full max-w-lg p-12 "
                >
                  <label
                    htmlFor="name"
                    className="self-start text-xs font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    name="editedName"
                    id="editedName"
                    type="text"
                    className="flex items-center h-12 px-4 mt-2 rounded text-black  focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
                  />
                  <label
                    htmlFor="userPhotoURL"
                    className="self-start mt-3 text-xs font-semibold"
                  >
                    Your Photo URL
                  </label>
                  <input
                    id="editedPhotoURL"
                    type="text"
                    className="flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-green-700 hover:text-white transition-opacity text-green-700 font-semibold w-full py-2 rounded flex items-center justify-center h-12 px-6 mt-8 text-sm "
                  >
                    Confirm
                  </button>
                </form>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
              >
                Nah, go back
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalEditProfile;
