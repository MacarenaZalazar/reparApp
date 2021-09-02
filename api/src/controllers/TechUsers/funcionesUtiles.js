// exports.update = (req, res) => {
//     if (!req.body) {
//       return res.status(400).send({
//         message: "Data to update can not be empty!"
//       });
//     }

//     const id = req.params.id;

//     Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
//           });
//         } else res.send({ message: "Tutorial was updated successfully." });
//       })

//       {
//           id:
//           workZones : algo
//           jobtyes:
//           user : id
//       }
