import User from '../model/userModel.js';

//createnew user
//post route
//@route:=>  /user/createuser
const usercreate = async (req, res) => {
  const { email, mobile } = req.body;

  try {
    //if mobile and email already exist
    const getExistUser = await User.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });

    if (getExistUser) {
      res.status(400).json({
        errorCode: 1,
        errorMessage:
          getExistUser.email === email && !getExistUser.mobile === mobile
            ? 'Email Already exist'
            : getExistUser.mobile === mobile && !getExistUser.email === email
            ? 'mobile number already exist'
            : 'email and mobile number  already exist',
      });
    }
    //   if no email and number
    else {
      const newUser = await User.create({ ...req.body });
      await newUser.save();
      res.status(201).json({
        errorCode: 0,
        errorMessage: 'user create Success',
        list: newUser,
      });
    }
  } catch (error) {
    res.status(400).json({
      errorCode: 1,
      errorMessage: error.message,
    });
  }
};

//getAll user
//or also want to get user by userId
//get route
//@route:=>  /user/getUser
const getUsers = async (req, res) => {
  try {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.countDocuments({});
    const getUser = await User.find({})
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.status(200).json({
      errorCode: 0,
      errorMessage: getUser.length > 0 ? 'record found' : 'empty record',
      page,
      pages: Math.ceil(count / pageSize),
      totalDoc: count,
      list: getUser,
    });
  } catch (error) {
    res.status(500).json({
      errorCode: 1,
      errorMessage: error.message,
    });
  }
};

//get UserBy id
//get req
//@route:=>  /user/:id
const getUserById = async (req, res) => {
  // console.log(req.params);
  const getUser = await User.findById(req.params.id);
  try {
    if (getUser) {
      res.status(200).json({
        errorCode: 0,
        errorMessage: 'use details',
        list: getUser,
      });
    } else {
      res.status(404).json({
        errorCode: 0,
        errorMessage: 'user not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      errorCode: 1,
      errorMessage: error.message,
    });
  }
};

//put UserBy id
//put req
//@route:=>  /user/:id
const updateUser = async (req, res) => {
  const { name, email, mobile, address } = req.body;
  const existUser = await User.findById(req.params.id);
  try {
    if (existUser) {
      existUser.name = name || existUser.name;
      existUser.email = email || existUser.email;
      existUser.mobile = mobile || existUser.mobile;
      existUser.address = address || existUser.address;

      await existUser.save();
      res.status(200).json({
        errorCode: 0,
        errorMessage: 'record updated',
      });
    } else {
      res.status(404).json({
        errorCode: 0,
        errorMessage: 'user not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      errorCode: 1,
      errorMessage: error.message,
    });
  }
};

export { usercreate, getUsers, getUserById, updateUser };
