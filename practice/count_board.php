<?php
    include_once "db.php";
    //파일 위치 변경하거나 db.php 내용 그대로 여기에 적어야 적용가능

    $conn = get_conn();

    $YY = date('Y');
    $MM = date('m');
    $DD = date('d');
    $dat = $YY."-".$MM."-".$DD;
    // 오늘 날짜 정보를 DB에서 조회한다
    $sql = "SELECT * FROM count_db WHERE redate = '$dat'";
    // 쿼리 전송
    $result = mysqli_query($conn, $sql);
    // 결과 집합을 받아온다
    mysqli_num_rows($result);

    if(!$list) { //아무도 들어온 적이 없어서 date 정보가 없을 경우
        $count = 0;
    }
    else{ //누군가가 들어온 적이 있어서 date정보가 존재할 경우
        $row = mysqli_fetch_assoc($result);
        $count = $row['count']; //현재 날짜의 count값을 가져온다
    }
                               
    if($count === 0 ){
        $count++; //오늘 날짜로 새로운 count값을 추가한다
        $sql = "INSERT INTO count_db VALUES ($count, '$dat')"
    }
    else{
        $count++;  //오늘 날짜의 기존 count 값을 변경시킨다
        $sql = "UPDATE count_db SET count = $count WHERE redate = '$dat'";
    }

    mysqli_query($conn, $sql);
    // 총 조회수 - 모든 count값을 sum()적용
    $total_qurey = "SELECT SUM(count) as cnt FROM count_db";
    $total_count = mysqli_fetch_assoc(mysqli_query($conn, $total_qurey))['cnt'];
    mysqli_close($conn);
    

    echo "<br><center><h2>방문자 수 통계입니다</h2></center>";
    echo "[ 오늘 : <font color = red>";
    echo $count;
    echo "</font>] <br>";

    echo "[ Total: <font color = blue>";
    echo $total_count;
    echo "</font>] <br>";

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
    
</body>
</html>