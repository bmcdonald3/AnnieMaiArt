import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

const Sidebar: React.FC = () => {
    const itemList = [
        {
            text: "paintings"
        },
        {
            text: "about"
        },
        {
            text: "contact"
        },
        {
            text: "2020"
        }
    ];

    return (
        <>
        <Drawer variant = "permanent">
            <Divider />
            <List>
                {itemList.map((item, index) => {
                    const { text } = item;
                    return (
                        <ListItem button key={text}>
                        <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
        </>
    );
}

export default Sidebar;