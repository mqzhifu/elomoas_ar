let TokenManager  = {
    Get :function(){
        var data = localStorage.getItem("token");
        console.log("TokenManager localStorage.getItem(token):",data);
        return data;
    },
    Set:function(data){
        console.log("TokenManager localStorage.setItem(token):",data);
        localStorage.setItem("token",data);
    },
    Clear:function (){
        localStorage.clear();
    },
}

export default TokenManager;