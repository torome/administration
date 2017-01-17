<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>{{ seo('title') }}</title>
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
    <link href="{{ asset('/assets/admin/css/app.css') }}" rel="stylesheet">
</head>
<body class="skin-blue sidebar-mini fixed">
<div id="app"></div>
<script>
    window.csrf_token = "{{ csrf_token() }}";
    window.api = "{{ url('api') }}";
    window.url = "{{ url('admin') }}";
</script>
<script src="{{ asset('/assets/admin/js/manifest.js') }}"></script>
<script src="{{ asset('/assets/admin/js/vendor.js') }}"></script>
<script src="{{ asset('/assets/admin/js/app.js') }}"></script>
</body>