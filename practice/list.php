<?php 
    if(isset($_POST['search_input_txt']) && $_POST['search_input_txt'] != ""){
        $param += [
            "search_select" => $_POST["search_select"], //select박스 value값
            "search_input_txt" => $_POST["search_input_txt"], //
        ];
        $list = search_board($param);
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action = "list.php"></form>
        <div>
            <select name="search_select">
                <option value="search_writer"> 작성자</option>
                <option value="search_title"> 제목</option>
                <option value="search_ctnt"> 제목+내용</option>
                
            </select>
                <input type="text" name="search_input_text">  
                //적다가 다 못적음..
        </div>
</body>
</html>