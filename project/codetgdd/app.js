var Parameter = {
    url: './data/vietnam.json',//Đường dẫn đến file chứa dữ liệu hoặc api do backend cung cấp
    method:'GET', //do backend cung cấp 
    responseType: 'application/json', //kiểu Dữ liệu trả về do backend cung cấp
}
//gọi ajax = axios => nó trả về cho chúng ta là một promise
var promise = axios(Parameter);
//Xử lý khi request thành công
promise.then(function(result) {
  console.log(result.data) 
});
