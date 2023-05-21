// const express = require("express");
// const cors = require("cors");
// const User = require("./config");
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get("/", async(req, res) => {
//     const snapshot = await User.get();
//     const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     res.send(list);
// });
// app.get("/:id", async(req, res) => {
//     const id = req.params.id;
//     const doc = await User.doc(id).get();
//     if (!doc.exists) {
//         res.status(404).send({ error: "User not found" });
//     } else {
//         res.send({ id: doc.id, ...doc.data() });
//     }
// });

// // app.post("/create", async(req, res) => {
// //     // const data = req.body;
// //     // await User.add({ data });

// //     const { name, password, role } = req.body;
// //     await User.add({ name, password, role });
// //     res.send({ msg: "User Added" });
// // });

// app.post("/create", async(req, res) => {
//     const { Name, Password, Role } = req.body;
//     const newUser = { Name, Password, Role };
//     await User.add(newUser);
//     res.send({ msg: "User Added" });
// });


// // app.put("/update", async(req, res) => {
// //     const { Name, Password, Role } = req.body;
// //     const newUser = { Name, Password, Role };
// //     await User.doc(id).update(data);
// //     res.send({ msg: "Updated" });
// // });

// // app.post("/delete", async(req, res) => {
// //     const id = req.body.id;
// //     await User.doc(id).delete();
// //     res.send({ msg: "Deleted" });
// // });
// app.delete("/:id", async(req, res) => {
//     const id = req.params.id;
//     await User.doc(id).delete();
//     res.send({ msg: "Deleted" });
// });

// app.listen(4000, () => console.log("Up & RUnning *4000"));