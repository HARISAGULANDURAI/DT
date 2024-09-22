const tasks = [
    {
        task_id: 1,
        task_title: "Technical Project Management",
        assets: [
            {
                asset_id: 1,
                title: "Introduction to TPM",
                description: "Learn the basics of Technical Project Management.",
                content_type: "video",
                content_url: "https://example.com/video-url"
            },
            {
                asset_id: 2,
                title: "Documenting the Process",
                description: "Understand how to document project processes effectively.",
                content_type: "article",
                content_url: "https://example.com/article-url"
            }
        ]
    }
];

function populate_journey_board() {
    const journey_list = document.getElementById("journey_list");
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.task_title;
        li.onclick = () => toggle_task_display(index);
        journey_list.appendChild(li);
    });
}

function populate_tasks() {
    const task_container = document.getElementById("task_container");
    tasks.forEach(task => {
        const task_div = document.createElement("div");
        task.assets.forEach(asset => {
            const asset_div = document.createElement("div");
            asset_div.classList.add("asset_container");
            
            const title = document.createElement("h3");
            title.textContent = asset.title;
            title.classList.add("asset_title");
            title.onclick = function() { 
                this.nextElementSibling.style.display = 
                this.nextElementSibling.style.display === "none" ? "block" : "none"; 
            };
            
            const description = document.createElement("div");
            description.classList.add("description");
            description.innerHTML = `<p>${asset.description}</p>`;
            
            if (asset.content_type === "video") {
                const video = document.createElement("video");
                video.controls = true;
                const source = document.createElement("source");
                source.src = asset.content_url;
                source.type = "video/mp4";
                video.appendChild(source);
                description.appendChild(video);
            } else if (asset.content_type === "article") {
                const link = document.createElement("a");
                link.href = asset.content_url;
                link.textContent = "Read More";
                link.target = "_blank";
                description.appendChild(link);
            }
            
            asset_div.appendChild(title);
            asset_div.appendChild(description);
            task_div.appendChild(asset_div);
        });
        task_container.appendChild(task_div);
    });
}

function toggle_task_display(index) {
    const task_container = document.getElementById("task_container");
    while (task_container.firstChild) {
        task_container.removeChild(task_container.firstChild);
    }
    const task_div = document.createElement("div");
    tasks[index].assets.forEach(asset => {
        const asset_div = document.createElement("div");
        asset_div.classList.add("asset_container");
        
        const title = document.createElement("h3");
        title.textContent = asset.title;
        title.classList.add("asset_title");
        title.onclick = function() { 
            this.nextElementSibling.style.display = 
            this.nextElementSibling.style.display === "none" ? "block" : "none"; 
        };
        
        const description = document.createElement("div");
        description.classList.add("description");
        description.innerHTML = `<p>${asset.description}</p>`;
        
        if (asset.content_type === "video") {
            const video = document.createElement("video");
            video.controls = true;
            const source = document.createElement("source");
            source.src = asset.content_url;
            source.type = "video/mp4";
            video.appendChild(source);
            description.appendChild(video);
        } else if (asset.content_type === "article") {
            const link = document.createElement("a");
            link.href = asset.content_url;
            link.textContent = "Read More";
            link.target = "_blank";
            description.appendChild(link);
        }
        
        asset_div.appendChild(title);
        asset_div.appendChild(description);
        task_div.appendChild(asset_div);
    });
    task_container.appendChild(task_div);
}

window.onload = function() {
    populate_journey_board();
    populate_tasks();
};
