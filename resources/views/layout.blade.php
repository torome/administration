<!DOCTYPE html>
<html>
<head>
    <title>{{ seo('title') }}</title>
    <meta charset="utf-8">
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
    <link href="{{ asset('assets/admin/css/app.css') }}" rel="stylesheet">
</head>
<body class="skin-blue sidebar-mini fixed">
<div id="app"></div>
<script>
    window.admin = "{{ url('admin') }}";
    window.api = "{{ url('api') }}";
    window.asset = "{{ asset('assets') }}";
    window.csrf_token = "{{ csrf_token() }}";
    window.upload = "{{ url('editor') }}";
    window.url = "{{ url('') }}";
    window.UEDITOR_HOME_URL = "{{ asset('assets/neditor') }}/";
    window.extensions = [
      @foreach($extensions as $extension)
        "{{ $extension->getName() }}",
      @endforeach
    ];
</script>
<script src="{{ asset('assets/admin/js/manifest.js') }}"></script>
<script src="{{ asset('assets/admin/js/vendor.js') }}"></script>
@foreach($extensions as $extension)
    @if($extension->getScript())
        <script src="{{ $extension->getScript() }}"></script>
    @endif
@endforeach
@foreach($modules as $module)
    @if($module->getScript())
        <script src="{{ $module->getScript() }}"></script>
    @endif
@endforeach
<script src="{{ asset('assets/admin/js/app.js') }}"></script>
</body>