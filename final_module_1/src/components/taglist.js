const tags = [
    { 
        name: "Thư giãn"
    },
    { 
        name: "Dễ ngủ" 
    },
    { 
        name: "Trên đường đi làm" 
    },
    { 
        name: "Vui tươi" 
    },
    { 
        name: "Buồn" 
    },
    { 
        name: "Rap" 
    },
    { 
        name: "Vui tươi" 
    },
    { 
        name: "Buồn" 
    },
    { 
        name: "Rap" 
    }
];

export const TagList = () => {
    const html = tags
        .map((tag) => {
            return `<span class="px-3 py-1 bg-[#ffffff1f] rounded-lg  text-[#FFF] cursor-pointer ">${tag.name}</span>`;
        })
        .join("");

    return `
    <div class="flex gap-3 mt-5">
       ${html}
    </div>
    `;
};

