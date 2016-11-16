<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>{{ seo('title') }}</title>
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
    @section('css')@show
</head>
<body class="hold-transition skin-blue sidebar-mini fixed">
<app>加载中...</app>
<script>
    window.csrf_token = "{{ csrf_token() }}";
    window.api = "{{ url('api') }}";
    window.url = "{{ url('admin') }}";
</script>
<script type="text/javascript" src="http://192.168.31.119:8080/app.js"></script>
</body>