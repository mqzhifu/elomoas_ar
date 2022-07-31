import axios from 'axios';

var commonHeader = {
    "X-Source-Type": process.env.VUE_APP_X_SOURCE_TYPE,
    "X-Project-Id":process.env.VUE_APP_X_PROJECT_ID,
    "X-Access": process.env.VUE_APP_X_ACCESS,
    "X-Token":"",
};

axios.defaults.headers.common = commonHeader;
axios.defaults.timeout=5000;

let Server  = {
    setToken : function (token){
        commonHeader["X-Token"] = token;
        axios.defaults.headers.common = commonHeader;
    },
    getHeader : function(){
        return commonHeader;
    },
    //请求后端接口
    request : async function (uri, data,callbackFunc){
        var prefix = "server.request axios  ";
        // var domain = "http://127.0.0.1:1111";
        var domain = process.env.VUE_APP_HTTP_PROTOCOL + "://"+process.env.VUE_APP_SERVER_HOST;
        var url = domain + uri;
        console.log(prefix + " url:" + url , " data:",data);

        var p = await axios.post(url, data).then( (response) => {
            console.log("response:",response);
            // alert(response.status);
            if (response.status != 200){
                console.log(prefix + " response status != 200");
                return response;
            }

            if (response.data.code != 200){
                console.log(prefix + " response data.code != 200");
            }
            return response.data;
            // alert(response.data.data);
            // callbackFunc(response.data.data);
            // return response.data.data;
        }).catch( (error)=> {
            console.log(prefix+"error:",error);
        });
        return p;
    }
}

export default Server