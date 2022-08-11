let TokenManager  = {
    Get :function(){
        var data = localStorage.getItem("token");
        console.log("TokenManager localStorage.getItem(token):",data);
        if (!data || typeof(data) == 'undefined' ){
            return data;
        }

        var expire = this.GetExpire();
        console.log("get expire :",expire)
        if(!expire || expire == -1 || expire < 0 ){
            console.log("expire time err:",expire)
            this.Clear();
            return null;
        }

        if (GetNow() > expire){
            console.log("token has expire");
            this.Clear();
            return null;
        }

        return data;
    },
    Set:function(data){
        console.log("TokenManager localStorage.setItem(token):",data);
        localStorage.setItem("token",data);
        var expireTime = GetNow() + 3 * 60 * 60;
        this.SetExpire(expireTime);
    },
    GetExpire :function(){
        var token_expire = localStorage.getItem("token_expire");
        if (!token_expire || typeof(token_expire) == 'undefined' ){
            return -1;
        }

        return parseInt(token_expire);
    },
    SetExpire : function(time){
        localStorage.setItem("token_expire",time);
    },
    Clear:function (){
        console.log("TokenManager localStorage.clear.");
        localStorage.clear();
    },
}

function GetNow(){
    return Math.round(new Date().getTime()/1000);
}

export default TokenManager;