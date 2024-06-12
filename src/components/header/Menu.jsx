

const Menu = ({menu}) => {
    const {name} = menu
    return (
        <li className='mr-10 hover:bg-yellow-200'>
            <a href={menu.path}>{name}</a>
        </li>
    );
};

export default Menu;