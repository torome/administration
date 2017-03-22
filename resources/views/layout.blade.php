<!DOCTYPE html>
<html>
<head>
    <title>{{ seo('title') }}</title>
    <meta charset="utf-8">
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
    <link href="{{ asset('assets/admin/css/app.css') }}" rel="stylesheet">
    @foreach($extensions as $extension)
        @if($extension->getStylesheet())
            @foreach($extension->getStylesheet() as $stylesheet)
                <link href="{{ $stylesheet }}" rel="stylesheet">
            @endforeach
        @endif
    @endforeach
    @foreach($modules as $module)
        @if($module->getStylesheet())
            @foreach($module->getStylesheet() as $stylesheet)
                <link href="{{ $stylesheet }}" rel="stylesheet">
            @endforeach
        @endif
    @endforeach
</head>
<body class="skin-blue sidebar-mini fixed">
<div id="app"></div>
<script>
    window.admin = "{{ url('admin') }}";
    window.api = "{{ url('api') }}";
    window.asset = "{{ asset('assets') }}";
    window.csrf_token = "{{ csrf_token() }}";
    window.extensions = [
      @foreach($extensions as $extension)
        "{{ $extension->getIdentification() }}",
      @endforeach
    ];
    window.modules = [
      @foreach($modules as $module)
        "{{ $module->getIdentification() }}",
      @endforeach
    ];
    window.local = {!! $translations !!};
    window.upload = "{{ url('editor') }}";
    window.url = "{{ url('') }}";
    window.UEDITOR_HOME_URL = "{{ asset('assets/neditor') }}/";
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