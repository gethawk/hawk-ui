## Installation


#### To install a component run
`$ npm install @hawk-ui/sidebar --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/sidebar/dist/index.min.css
```


## Usage


#### Expanded sidebar:
[Demo](https://hawk.oncrypt.co/#!/Sidebar/1)
```js static
import Sidebar from '@hawk-ui/sidebar';
```
```js
const header = {
  title: 'Wallnit',
};

const panes = [
  {
    title: 'Home',
    icon: 'fas fa-cog',
    extras: [
      {
        key: 'about-us',
        title: 'About Us',
        link: '',
        isEnable: true,
      },
      {
        key: 'Contact Us',
        title: 'contact-us',
        link: '',
        isEnable: true,
      },
    ],
    isDisabled: false,
  },
  {
    title: 'Settings',
    icon: 'fas fa-cog',
    extras: [
      {
        key: 'profile',
        title: 'Profile',
        link: '',
        isEnable: true,
      },
      {
        key: 'change-password',
        title: 'Change Password',
        link: '',
        isEnable: true,
      },
    ],
    isDisabled: false,
  },
];

const footer = {
  title: 'Logout',
};

<Sidebar
  header={header}
  panes={panes}
  footer={footer}
  activeKey="profile"
/>
```



#### collapsed sidebar:
[Demo](https://hawk.oncrypt.co/#!/Sidebar/1)
```js static
import Sidebar from '@hawk-ui/sidebar';
```
```js
const header = {
  element: <div>Wallnit</div>,
};

const panes = [
  {
    title: 'Home',
    icon: 'fas fa-cog',
    extras: [
      {
        key: 'about-us',
        title: 'About Us',
        icon: 'fas fa-home',
        link: '',
        isEnable: true,
      },
      {
        key: 'Contact Us',
        title: 'contact-us',
        icon: 'far fa-id-badge',
        link: '',
        isEnable: true,
      },
    ],
    isDisabled: true,
  },
  {
    title: 'Settings',
    icon: 'fas fa-cog',
    extras: [
      {
        key: 'profile',
        title: 'Profile',
        icon: 'fas fa-users',
        link: '',
        isEnable: true,
      },
      {
        key: 'change-password',
        title: 'Change Password',
        icon: 'fas fa-unlock-alt',
        link: '',
        isEnable: true,
      },
    ],
    isDisabled: true,
  },
];

const footer = {
  element: <div>Logout</div>,
};

<Sidebar
  header={header}
  panes={panes}
  footer={footer}
  variant="collapsed"
  activeKey="profile"
/>
```
