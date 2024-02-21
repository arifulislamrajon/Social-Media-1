const m_n = document.querySelectorAll('.m_n');
const showModal =  document.querySelectorAll('.show_modal');
const activeRightTab = document.querySelectorAll('.nav_right i');

// window all activity
window.addEventListener('click', (event) => {
    if (!event.target.matches('.m_n') && !event.target.closest('.show_modal')) {
        showModal.forEach((element) => {
            element.classList.remove('active_messenger')
        });
    }

    if(!event.target.matches('.m_n') && !event.target.closest('.show_modal')){
        m_n.forEach((element) => {
            element.classList.remove('active')
        });
    }

    if (!searchBox.contains(event.target) && event.target !== searchInput) {
        searchBox.style.display = "none";
    }
})

// common remove tab
const removeTab = (remove, currentIndex) => {
    remove.forEach((removeActiveTab, index) => {
        if(index !== currentIndex){
            removeActiveTab.classList.remove('active')
        }
    });
}

// nav middle tab active
const messageTab = document.querySelectorAll('.message_tab span');

const activeFunction = (active, currentActiveTab) => {
    active.forEach((activetab, index) => {
        activetab.addEventListener('click', () => {
            removeTab(currentActiveTab, index);
            activetab.classList.add('active');
        })
    });
}

activeFunction(messageTab, messageTab);

// nav right tab toggle
const activeFunctionFroEach = (active, currentActiveTab) => {
    active.forEach((activetab, index) => {
        activetab.addEventListener('click', () => {
            removeTab(currentActiveTab, index);
            activetab.classList.toggle('active');
        })
    });
}

activeFunctionFroEach(activeRightTab, activeRightTab);

// messenger notificaton show modal
m_n.forEach((clickIcon, index) => {
    clickIcon.addEventListener('click', () => {
        showModalFunction(index)
    })
})

const showModalFunction = (index) => {
    showModal.forEach((showmodal, i) => {
        if(i === index){
            showmodal.classList.toggle('active_messenger');
        }else{
            showmodal.classList.remove('active_messenger')
        }
    })
}

/*---------------------- theme change ----------------------*/
const themeButton = document.querySelector('.theme');

const darkTheme = 'dark_theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-solid fa-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
});

// single click function add class list
const clickAddFunction = (click, callback) => {
    click.addEventListener('click', () => {
        callback()
    })
}

// messenger search box
const msgSearchBar = document.querySelector('.message_search_bar input');
const singleChat = document.querySelectorAll('.sigle_chat');
const load = document.querySelector('.message_loading');

const searchFunction = (click, callback) => {
    click.addEventListener('input', () => {
        callback()
    })
}

const messageSearchFunction = () => {
    const msgSearchValue = msgSearchBar.value.toLowerCase();

    singleChat.forEach(name => {
        const convertName = name.querySelector('.chat_name').textContent.toLowerCase();

    if(convertName.includes(msgSearchValue) ){
        load.style.display = 'flex'
        name.style.display = 'none'

        setTimeout(() => {
            name.style.display = 'flex'
            load.style.display = 'none'
    }, 4000);
    }else{
        name.style.display = 'none'
    }
});
}

searchFunction(msgSearchBar, messageSearchFunction)

//add friend
const addFriend = document.querySelectorAll('.add_friend');
const requestSent = document.querySelectorAll('.s_friend > div > p')

addFriend.forEach((friend, index) => {
    friend.addEventListener('click', () => {
        friend.style.opacity = '0';
        friend.style.cursor = 'auto';
        requestSent.forEach((element, i) => {
            if(i === index){
                element.style.opacity = '1'
            }
        });

        removeFriend.forEach((element, idx) => {
            if(idx === index){
                element.textContent = 'Cancel'
            }
        }); 
    })
});

// remove friend
const removeFriend = document.querySelectorAll('.remove_friend');

removeFriend.forEach(friend => {
    friend.addEventListener('click', () => {
        friend.parentNode.parentNode.remove();
        console.log('first')
    })
});

// friends left tab
const friendsTab = document.querySelectorAll('.friend_left_tab');

const removeFndTab = () => {
    friendsTab.forEach(tab => {
            tab.classList.remove('active')
    });
}

friendsTab.forEach(tab => {
    tab.addEventListener('click', () => {
        removeFndTab();
        tab.classList.add('active');
    })
});

// search box open
const searchInput = document.querySelector('.search_box input');
const searchBox = document.querySelector('.search_section');

const searchBoxFun = () => {
    searchBox.style.display = 'block'
}

clickAddFunction(searchInput, searchBoxFun);

// search box remove
const searchBoxArrow = document.querySelector('.right_arrow');

const searchBoxFunRemove = () => {
    searchBox.style.display = 'none'
}

clickAddFunction(searchBoxArrow, searchBoxFunRemove);