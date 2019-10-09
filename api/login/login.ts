import  * as jwt from  'jsonwebtoken';

class HandlerGenerator {
    login (req, res,next) {
       
      let username = req.body.username;
      let password = req.body.password;
      // For the given username fetch user from DB
      let mockedUsername = 'admin';
      let mockedPassword = 'password';
  
      if (username && password) {
        if (username === mockedUsername && password === mockedPassword) {
          let token = jwt.sign({username: username},
            'Hello',
            { expiresIn: '24h' // expires in 24 hours
            }
          );
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });
          next();
        } else {
          res.sendStatus(403).json({
            success: false,
            message: 'Incorrect username or password'
          });
          next();
        }
      } else {
        res.sendStatus(400).json({
          success: false,
          message: 'Authentication failed! Please check the request'
        });
        next();
      }
    }
    index (req, res,next) {
      res.json({
        success: true,
        message: 'Index page'
      });
      next();
    }
  }

  export default HandlerGenerator