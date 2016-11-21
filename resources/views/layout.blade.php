<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>{{ seo('title') }}</title>
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
    <link rel="stylesheet" href="{{ asset('assets/admin/css/app.css') }}">
</head>
<body class="hold-transition skin-blue sidebar-mini fixed">
<app>加载中...</app>
<script>
    window.csrf_token = "{{ csrf_token() }}";
    window.api = "{{ url('api') }}";
    window.url = "{{ url('admin') }}";
</script>
<script src="{{ asset('assets/admin/js/app.js') }}"></script>
</body>