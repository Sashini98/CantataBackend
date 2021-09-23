const Covers = require("../model/covers.model");
const CoversModel = require("../model/covers.model");

exports.inputCovers = (req, res) => {
	CoversModel.inputCovers(req.body, (err, cover) => {
		if (err) res.send(err);
		console.log("cover added" + cover.insertId);
		res
			.status(200)
			.send({ message: "New cover added successfully", data: cover.insertId });
	});
};

exports.getCovers = (req, res) => {
	// console.log('get replyriccount');
	console.log("Requestttttttttttttttttttt ");
	CoversModel.getcover((err, cover) => {
		// console.log("We are here");
		if (err) res.send(err);
		console.log("cover data", cover);
		res.send(cover);
	});
};

exports.getcoverbyId = (req, res) => {
	// console.log('get replyriccount');
	CoversModel.getcoverbyId(req.params.cover_id, (err, covers) => {
		// console.log("We are here");
		if (err) res.send(err);
		console.log("cover data", covers);
		res.send(covers);
	});
};

// exports.inputCoverTags = (req, res) => {
// 	CoversModel.inputCoverTags(req.body, (err, cover) => {
// 		if (err) res.send(err);
// 		res.status(200).send({ message: "New cover added successfully"} );
// 	});
// };

exports.inputCoverTags = (req, res) => {
	const coverReqData = new CoversModel(req.body);
	console.log("coverReqData", coverReqData);
	// check null
	if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
		res.send(400).send({ success: false, message: "Please fill all fields" });
	} else {
		CoversModel.inputCoverTags(coverReqData, (err, covers) => {
			if (err) res.send(err);
			// res.send(covers);
			// return res.json({status: true, message: "New cover added successfully"})
		});
	}
};

exports.addFav = (req, res) => {
	// console.log("We are at the controller");
	CoversModel.addFav(req.body, (err, fav) => {
		if (err) res.send(err);
		res.status(200).send({ message: "Added to favourites" });
	});
};

exports.getFavs = (req, res) => {
	// console.log('get replyriccount');
	CoversModel.getFavs(req.params.user_id, (err, fav) => {
		// console.log("We are here");
		if (err) res.send(err);
		console.log("fav data", fav);
		res.send(fav);
	});
};

exports.removeFavs = (req, res) => {
	// console.log('get replyriccount');
	CoversModel.removeFavs(req.body, (err, fav) => {
		// console.log("We are here");
		if (err) res.send(err);
		// console.log("fav data", fav);
		res.send(fav);
	});
};