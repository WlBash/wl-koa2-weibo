/**
 * @description user controller
 * @author wulei
 */

const { getUserInfo } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
    registerUserNameNotExistInfo,
    //registerUserNameExistInfo,
    //registerFailInfo,
    //loginFailInfo,
    //deleteUserFailInfo,
    //changeInfoFailInfo,
    //changePasswordFailInfo
} = require('../model/ErrorInfo')

/**
 * @param {string} 用户名是否存在
 */

async function isExist(userName) {
    const userInfo = await getUserInfo(userName)
    if(userInfo){
        // { errno: 0, data: {....} }
        return new SuccessModel(userInfo)
    }else{
        // { errno: 10003, message: '用户名未存在' }
        return new ErrorModel(registerUserNameNotExistInfo)
    }
}

module.exports = {
    isExist
}