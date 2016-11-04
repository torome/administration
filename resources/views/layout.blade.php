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
@yield('content')
@section('script')@show
</body>