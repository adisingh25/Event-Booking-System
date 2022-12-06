const User = require('../models/user')

exports.signupUser = async (req, res, next) => {
	//include addressPoint also
    try {
        console.log(req.body);
        const {
            name, phoneNumber, email, password
        } = req.body;
        
    
        if (!email || !name || !phoneNumber || !password) {
            return res.status(401).json({
                status: 401,
                message:
                    "Please provide all required details including name, phoneNumber, email and address, foodType, UserType",
            });
        }
        const user = await User.create({name, phoneNumber, email, password})
    
        const token = user.getJwtToken();
        console.log(`User token is ${token}`);
        return res.status(200).json({
            status: 200,
            message: "User is added to database successfully.",
            token,
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({"status": "Something went wrong"})
    }
};

exports.loginUser = async (req, res) => {

    const {email, password} = req.body();



    res.status(200).json({"success": "ok"})
}