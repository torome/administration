<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>{{ seo('title') }}</title>
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
    @section('css')@show
</head>
<body class="hold-transition skin-blue sidebar-mini">
<app>加载中...</app>
<script>
    window.csrf_token = "{{ csrf_token() }}";
    window.url = "{{ url('') }}";
</script>
<script type="text/javascript" src="http://localhost:8080/app.js"></script>
</body>