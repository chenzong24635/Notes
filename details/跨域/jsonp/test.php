
<?php
//    使用jsonp实现跨域传输的方式，重点在于通过callback回调函数进行传递数据
    $data = array("name"=>"张三","sex"=>"男");
    $callback = $_GET['callback'];
    echo $callback."(".json_encode($data).")";
?>