const jwt = require('jsonwebtoken')

function permission(num) {
    return (req, res, next) => {
        let isTrue;
        
        for (let el of req.user.persmission) {
            if (el == num) {
                isTrue = true;
                break;
            }
        }
        if (isTrue) {
            next();
        }else {
            res.send("Sening permissionning yo'q")
        }
    }
}

module.exports = {
    permission
}