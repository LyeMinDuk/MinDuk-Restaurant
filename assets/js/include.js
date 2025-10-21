function includePart(file, targetId){
    const currentPath = window.location.pathname;
    const isInBlogFolder = currentPath.includes('/blog/');
    const basePath = isInBlogFolder ? '../' : './';
    const filePath = basePath + file;
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Không thể tải ' + filePath);
            return response.text();
        })
        .then(data => {
            if (isInBlogFolder) {
                data = data.replace(/href="\.\//g, 'href="../');
                data = data.replace(/src="\.\//g, 'src="../');
            }
            
            document.getElementById(targetId).innerHTML = data;
        })
}

document.addEventListener('DOMContentLoaded', function(){
    includePart('header.html', 'header-data');
    includePart('footer.html', 'footer-data');
});