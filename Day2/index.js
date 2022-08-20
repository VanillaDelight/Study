const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);
console.log(myTags[1]);
console.log(myTags.length);

for (let tag of myTags) {
  console.log(tag);
}

const myTag = document.getElementById('myNumber');
console.log(myTag);
//두놈은 같다
const myTag2 = document.querySelector('#myNumber');
console.log(myTag2);

$("#name").blur(function(){
	var name = $("#name").val();
	if(name === "" || name.length < 2){
		$(".successNameChk").text("이름은 2자 이상 8자 이하로 설정해주세요 :)");
		$(".successNameChk").css("color", "red");
		$("#nameDoubleChk").val("false");
	}else{
		$.ajax({
			url : '${pageContext.request.contextPath}/nameCheck.do?name='+ name,
			type : 'post',
			cache : false,
			success : function(data) {
				if (data == 0) {
					$(".successNameChk").text("사용가능한 이름입니다.");
					$(".successNameChk").css("color", "green");
					$("#nameDoubleChk").val("true");
				} else {
					$(".successNameChk").text("사용중인 이름입니다 :p");
					$(".successNameChk").css("color", "red");
					$("#nameDoubleChk").val("false");
				}
			}, error : function() {
				console.log("실패");
			}
		});
	}
});