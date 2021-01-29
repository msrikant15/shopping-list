import { API, Auth } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

// This function is called immediately when the page loads, before populating the table with this data
export async function getUserItems() {
    let shopList = await API.graphql({ query: queries.listShoppingListItems});
    console.log(shopList.data)
    return shopList.data.listShoppingListItems.items
}

// This function is called when a user clicks the button 'Add'
export async function addItem(itemName) {
    
    // get the user info
    let userInfo = await Auth.currentUserInfo();

    // create json input for GraphQL
    let itemDetails = {
        itemName: itemName,
        user: userInfo.id
    };

    let addedItem = await API.graphql({ query: mutations.createShoppingListItem, variables: {input: itemDetails}});
    console.log("Added ", addedItem)
    return addedItem.data.createShoppingListItem;
}

// This function is called when a user deletes an existing item in the table
export async function deleteItem(itemId) {
    console.log("Deleting ", itemId)

    let itemDetails = {
        id: itemId
    };

    let deletedItem = await API.graphql({ query: mutations.deleteShoppingListItem, variables: {input: itemDetails}});
    console.log("Deleted ", deletedItem)
    return deletedItem;
}