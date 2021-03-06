const URL = 'https://en.wikipedia.org/w/rest.php/v1/search/title?q=Fo&limit=10';
const masterDiv = document.getElementById('search-result');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}


function createWikiSearch() {
    let div = createNode('div');
    div.className = "wiki-search";
   return div;
}

function createThumbNail() {
    let subDiv1 = createNode('div');
    subDiv1.className = 'wiki-search-thumbnail';
    return subDiv1;
}

function createImageTag(res) {
    let img = createNode('img');
    img.width = 60
    img.src = res?.thumbnail?.url ? res.thumbnail.url : 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=612x612&w=0&h=p8Qv0TLeMRxaES5FNfb09jK3QkJrttINH2ogIBXZg-c='
    return img;
}

function createWikiSearchContent() {
    let subDiv2 = createNode('div');
    subDiv2.className = 'wiki-search-content';
    return subDiv2;
}
function createWikiSearchTitle(titleContent) {
    let title = createNode('a');
    title.href = ""
    title.className = 'wiki-search-title';
    title.innerText = titleContent;
    return title;
}
function createWikiSearchDescription(descriptionContent) {
    let divDesc = createNode('div');
    divDesc.className = 'wiki-search-description';
    divDesc.innerText = descriptionContent
    return divDesc;
}
function createWikiSearchBox() {
    let div = createNode('input');
    div.className = "wiki-search-input-box";
    div.placeholder = "Search for pages containing [x]...";
    return div;
}

export function wikiSearchComponent() {
    fetch(URL)
        .then((resp) => resp.json())
        .then(function (data) {
            let result = data.pages;
            return result.map(function (res, index) {
                let wikiSearch = createWikiSearch()
                let thumbNail = createThumbNail();
                let img = createImageTag(res)
                let wikiSearchContent = createWikiSearchContent()
                let title = createWikiSearchTitle(res.title);
                let divDesc = createWikiSearchDescription(res.description)

                append(thumbNail, img)
                append(wikiSearch, thumbNail);
                append(wikiSearchContent, title)
                append(wikiSearchContent, divDesc);
                append(wikiSearch, wikiSearchContent);
                append(masterDiv, wikiSearch);

                if (index === result.length - 1) {
                   let div = createWikiSearchBox();
                    append(masterDiv, div);
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
