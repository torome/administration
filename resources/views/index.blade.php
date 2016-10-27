@extends('admin::layout')
@section('content')
    <div id="app" class="App">
        <div id="app-navigation" class="App-navigation"></div>
        <div id="drawer" class="App-drawer">
            <header id="header" class="App-header">
                <div id="header-navigation" class="Header-navigation"></div>
                <div class="container">
                    <h1 class="Header-title">
                        <a href="http://foudnation.io"> Notadd </a>
                    </h1>
                    <div id="header-primary" class="Header-primary"></div>
                    <div id="header-secondary" class="Header-secondary"></div>
                </div>
            </header>
        </div>
        <main class="App-content">
            <div class="container">
                <div id="admin-navigation" class="App-nav sideNav"></div>
            </div>
            <div id="content" class="sideNavOffset"></div>
            <div id="loading" style="display: none">Loading...</div>
            <noscript>
                <div class="Alert">
                    <div class="container">This site is best viewed in a modern browser with JavaScript enabled.</div>
                </div>
            </noscript>
        </main>
    </div>
    <div id="modal"></div>
    <div id="alerts"></div>
@endsection
@section('css')
    <link rel="stylesheet" href="{{ asset('assets/admin/css/admin.css') }}">
@endsection
@section('script')
    <script src="{{ asset('assets/admin/js/application.js') }}"></script>
    <script>
        var application = System.get('notadd/application').default;
        //        var modules = ["locale"]
        //        for (var i in modules) {
        //            var module = System.get(modules[i]);
        //            if (module.default) module.default(app);
        //        }
        application.boot({
            "resources": [],
            "session": {"userId": 1, "csrfToken": "ykoSOyNun73g6xkkNfNnWaUBwvQIyVOfANNoHHVb"},
            "document": null,
            "locales": {"zh": "\u7b80\u4f53\u4e2d\u6587", "en": "English"},
            "locale": "zh"
        });
    </script>
@endsection