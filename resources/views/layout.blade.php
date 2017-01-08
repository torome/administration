<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>{{ seo('title') }}</title>
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
</head>
<body class="skin-blue sidebar-mini fixed">
<div id="app"></div>
<script>
    window.csrf_token = "{{ csrf_token() }}";
    window.api = "{{ url('api') }}";
    window.url = "{{ url('admin') }}";
</script>
<script src="{{ asset('http://127.0.0.1:8080/app.js') }}"></script>
</body>