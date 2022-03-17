Vue.component("header-test", {
    /* html */
    template:`
    <header id="main-header">
        <hgroup>
            <h1 class="master-title">다양한 정보 소개 사이트</h1>
            <h2 class="master-description">잡학사전</h2>
        </hgroup>
    </header>
    `
});

Vue.component('nav-test', {
    /* html */
    template:
    `
    <nav id="main-navigation">
            <div class="pull-left">
                <ul class="outer-menu">
                    <li class="outer-menu-item">
                        <span class="menu-title">About</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="index.html">Home</a></li>
                            <li class="inner-menu-item"><a href="complain.html">Complain</a></li>
                            <li class="inner-menu-item"><a href="register_member.html">회원가입</a></li>
                            
                        </ul>
                    </li>
                    <li class="outer-menu-item">
                        <span class="menu-title">상품정보</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="info_cup.html">컵소개</a></li>
                        </ul>
                    </li>
                    <li class="outer-menu-item">
                        <span class="menu-title">찾아오시는길</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="#">데이터</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="pull-right">
                <div class="search-bar">
                    <form>
                        <input type="text" class="input-search" />
                        <input type="submit" class="input-search-submit" value="검색" />
                    </form>
                </div>
            </div>
        </nav>
        `
});

Vue.component('section-test', {
    /* html */
    template: `
    <div id="content">
    <section id="main-section">
        <article>
            <div class="article-header">
                <h1 class="article-title">HTML5 개요와 활용</h1>
                <p class="article-date">2013년 02월 14일</p>
            </div>
            <div class="article-body">
                <img src="images/macintosh.png" />
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo justo ac lorem pretium vitae rhoncus lectus ullamcorper. Aliquam facilisis euismod diam sollicitudin commodo. Nunc sagittis sapien venenatis lorem vestibulum cursus pellentesque mi sodales. Donec pellentesque hendrerit turpis, vitae tempor nibh ultricies at. Aliquam consequat rutrum erat, vel sodales tellus sagittis at. Proin sollicitudin augue eu augue vehicula vitae bibendum odio porta. Aliquam elit arcu, venenatis in imperdiet ut, scelerisque non dolor. Donec in vulputate tortor. Fusce egestas rutrum mi quis ultricies. Vivamus blandit augue ac felis ullamcorper consectetur. Curabitur pretium fringilla neque, vitae cursus massa auctor vitae. Integer non massa sit amet lacus accumsan blandit. Vivamus fermentum tellus at justo iaculis eu tempus lorem venenatis. Suspendisse quis eros consectetur tellus posuere commodo. In hac habitasse platea dictumst.</p>
                <br />
                <p>Praesent orci quam, ornare sed scelerisque ac, porta a justo. Pellentesque quis magna sed magna vehicula semper ac ut enim. Duis ut mattis ligula. Mauris at sem elit. Vestibulum justo tortor, malesuada non tincidunt quis, feugiat ut metus. Maecenas varius neque ut diam ultrices scelerisque. Praesent lectus massa, tincidunt vel adipiscing non, vehicula ut magna. Cras quis lacinia ipsum. Sed consequat consectetur volutpat. Integer sed tortor risus. Donec accumsan ante vel justo porttitor volutpat.</p>
            </div>
        </article>
        <article>
            <div class="article-header">
                <h1 class="article-title">HTML5 응용과 실습</h1>
                <p class="article-date">2013년 02월 17일</p>
            </div>
            <div class="article-body">
                <img src="images/iphone.png" />
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo justo ac lorem pretium vitae rhoncus lectus ullamcorper. Aliquam facilisis euismod diam sollicitudin commodo. Nunc sagittis sapien venenatis lorem vestibulum cursus pellentesque mi sodales. Donec pellentesque hendrerit turpis, vitae tempor nibh ultricies at. Aliquam consequat rutrum erat, vel sodales tellus sagittis at. Proin sollicitudin augue eu augue vehicula vitae bibendum odio porta. Aliquam elit arcu, venenatis in imperdiet ut, scelerisque non dolor. Donec in vulputate tortor. Fusce egestas rutrum mi quis ultricies. Vivamus blandit augue ac felis ullamcorper consectetur. Curabitur pretium fringilla neque, vitae cursus massa auctor vitae. Integer non massa sit amet lacus accumsan blandit. Vivamus fermentum tellus at justo iaculis eu tempus lorem venenatis. Suspendisse quis eros consectetur tellus posuere commodo. In hac habitasse platea dictumst.</p>
                <br />
                <p>Praesent orci quam, ornare sed scelerisque ac, porta a justo. Pellentesque quis magna sed magna vehicula semper ac ut enim. Duis ut mattis ligula. Mauris at sem elit. Vestibulum justo tortor, malesuada non tincidunt quis, feugiat ut metus. Maecenas varius neque ut diam ultrices scelerisque. Praesent lectus massa, tincidunt vel adipiscing non, vehicula ut magna. Cras quis lacinia ipsum. Sed consequat consectetur volutpat. Integer sed tortor risus. Donec accumsan ante vel justo porttitor volutpat.</p>
            </div>
        </article>
    </section>
    <aside id="main-aside">
        <div class="aside-list">
            <h3>카테고리</h3>
            <ul>
                <li><a href="#">데이터</a></li>
            </ul>
        </div>
        <div class="aside-list">
            <h3>최근 글</h3>
            <ul>
                <li><a href="#">데이터</a></li>
            </ul>
        </div>
    </aside>
</div>
`
});

Vue.component('footer-test', {
    /* html */
    template: `
    <footer id="main-footer">
    <a href="#">Created By Team-HeXagon, Kang Tae Gyung </a>
    </footer>
`
});

new Vue({
    el: "#page-wrapper"
});