function append(extension) {
    var grid = document.querySelector('#grid');
    var item = document.createElement('div');

    var h = '<div>';
    h += '<div class="thumbnail">';
    h += '<div class="extension_title">';
    h += '<h2><a href="' + extension.url + '" alt="extension Link">' + extension.name + '</a>';
    h += '</div>';
    h += '<div class="caption">';

    if (extension.github_username) {
        h += '<p><b>Written by: </b><a href="https://github.com/' + extension.github_username + '" alt="GH Link">' + extension.author + '</a></p>';
    } else {
        h += '<p><b>Written by: </b>' + extension.author + '</p>';
    }

    if (extension.source_code) {
        h += '<p><a href="' + extension.source_code + '" alt="Source code link">Source Code Available</a></p>';
    }

    if (extension.description) {
        h += '<p><b>Description: </b>' + extension.description + '</p>';
    }

    if (extension.tags) {
        extension.tags.forEach(function(tag) {
            h += '<span class="label label-pill label-primary">' + tag + '</span>';
        });
    }

    h += '</div>';
    h += '</div>';

    salvattore['append_elements'](grid, [item]);
    item.outerHTML = h;
}

function extensionSort(a , b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }

    return 1;
}

$.getJSON("./community_extensions.json", function(data) {
    var sorted = data.sort(extensionSort);
    $(sorted).each(function(i, extension) {
        append(extension);
    });
});
