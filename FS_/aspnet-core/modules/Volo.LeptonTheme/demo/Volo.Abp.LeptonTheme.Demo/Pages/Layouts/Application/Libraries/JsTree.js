(function($) {

    //write code doesn't require dom.ready

    $(function() {

        // To open all trees
        $(".tree").bind("loaded.jstree", function (event, data) {
            data.instance.open_all();
            data.instance.select_node('ul > li > ul > li:first');
        });

        $('#JsTreeDefault').jstree();

        $('#JsTreeCheckable').jstree({
            "checkbox": {
                "keep_selected_style": false
            },
            "plugins": ["checkbox"]
        });

        $('#JsTreeContextualAndDD').jstree({
            "core": {
                // so that create works
                "check_callback": true
            },
            "plugins": ["contextmenu", 'dnd']
        });

        $('#JsTreeJson').jstree({
            'core': {
                'data': [
                    { "id": "ajson1", "parent": "#", "text": "Root node 1" },
                    { "id": "ajson2", "parent": "#", "text": "Root node 2" },
                    { "id": "ajson3", "parent": "ajson1", "text": "Child 1" },
                    { "id": "ajson4", "parent": "ajson1", "text": "Child 2" },
                    { "id": "ajson5", "parent": "ajson1", "text": "Child 3" },
                    { "id": "ajson6", "parent": "ajson2", "text": "Child 4" },
                    { "id": "ajson7", "parent": "ajson2", "text": "Child 5" },
                    { "id": "ajson8", "parent": "ajson2", "text": "Child 6" }
                ]
            }
        });

        $('#JsTreeWholeRow').jstree({
            "plugins": ["wholerow"]
        });
    });

})(jQuery);