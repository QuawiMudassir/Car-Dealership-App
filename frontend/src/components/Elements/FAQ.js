import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const FAQ = () => {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="Meet Our Team" defaultOpen>
        <p>
            1. Ghazala Anjum <br />
            2. Mohammed Abdul Quawi Mudassir - C0911573 <br />
            3. Preet Ojha <br />
            4. RobinPreet Kaur
        </p>

        </Question>
        <Question title="Technologies we used?">
          <p>
            React, Framer Motion, React Icons, Tailwind CSS, JavaScript, Node.js, Express, MongoDB.
          </p>
        </Question>
        <Question title="How to setup and run this app?">
        <p>
  1. git clone https://github.com/QuawiMudassir/Car-Dealership-App <br />
  2. cd Car-Dealership <br />
  3. Setup your local db <br />
  4. For Backend: <br />
  &nbsp;&nbsp;&nbsp;&nbsp;i. cd Backend <br />
  &nbsp;&nbsp;&nbsp;&nbsp;ii. npm Install <br />
  &nbsp;&nbsp;&nbsp;&nbsp;iii. Node Server.js <br />
  5. For Frontend: <br />
  &nbsp;&nbsp;&nbsp;&nbsp;i. cd frontend <br />
  &nbsp;&nbsp;&nbsp;&nbsp;ii. npm Install <br />
  &nbsp;&nbsp;&nbsp;&nbsp;iii. npm start
</p>




        </Question>
        <Question title="How to Setup Up DB?">
          <p>
            1.Install MongoDB <br />
            2.Set up MongoDB Connection, Connect this app to your local MongoDb Compass <br />
            3.Run the Script add-Data.js to add data to your DB <br />
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
  animate={open ? "open" : "closed"}
  className="border-b-[1px] border-b-slate-300"
>
  <button
    onClick={() => setOpen((pv) => !pv)}
    className="flex w-full items-center justify-between gap-4 py-6"
  >
    <motion.span
      variants={{
        open: {
          color: "rgba(3, 6, 23, 0)",
        },
        closed: {
          color: "rgba(3, 6, 23, 1)",
        },
      }}
      className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-left text-lg font-medium"
    >
      {title}
    </motion.span>
    <motion.span
      variants={{
        open: {
          rotate: "180deg",
          color: "rgb(20 184 166)",
        },
        closed: {
          rotate: "0deg",
          color: "#030617",
        },
      }}
    >
      <FiChevronDown className="text-2xl" />
    </motion.span>
  </button>
  <motion.div
    initial={false}
    animate={{
      height: open ? height : "0px",
      marginBottom: open ? "24px" : "0px",
    }}
    className="overflow-hidden text-slate-600"
  >
    <p ref={ref}>{children}</p>
  </motion.div>
</motion.div>

  );
};

export default FAQ;