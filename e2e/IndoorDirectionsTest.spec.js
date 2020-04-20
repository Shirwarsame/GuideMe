/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Indoor Directions Feature", () => {
  /**USER STORIES COVERED
 * US-15 : As a user, I want to be able to view directions on the map
 * US-25 : AS a user, I would like to be able to search for a room
 * US-26 : As a user, I would like to be able to set a room as my start or destination
 * US-30 : As a user, I would like to be able to highlight points of interest such as washrooms, water fountains, stairs, etc.
 * US-31 : As a user, I would like to be able to generate directions to rooms between floors
 */

  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });

  /**Scenario: Getting Directions from 1 room to another room on different floors
   * US-15 : As a user, I want to be able to view directions on the map
   * US-25 : AS a user, I would like to be able to search for a room
   * US-26 : As a user, I would like to be able to set a room as my start or destination
   * US-31 : As a user, I would like to be able to generate directions to rooms between floors
   * 1. Click on the search bar
   * 2. Enter the number of a room: "H813"
   * 3. Select the corresponding item from the dropdown list
   * 4. Click on GET DIRECTIONS button
   * 5. Check that TO search bar is filled with "H813"
   * 6. Click on the FROM search bar
   * 7. Enter the number of a room on a different floor: "H937"
   * 8. Select the corresponding item from the dropdown list
   * 9. Click on VIEW ROUTE
   * 10. Check that the selected floor corresponds to the FROM floor (9th floor)
   * 11. Check that the path on the FROM floor exists
   * 12. Select the TO room floor (8th floor)
   * 13. Check that the path on the TO floor exists
   */
  it.skip("Getting directions from 1 room to another room on different floors", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H813");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    //TODO: Fix the workaround (next line) to check that "H813" is written in the To search bar  
    await expect(element(by.label("H813"))).toExist();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("H937");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "fast");
    //TODO: Find a solution for asserting the path shown on the map
    await element(by.id("FloorMenu_floorBarMenuView")).tapAtPoint({ x: 185, y: 23 });
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("right", "slow");
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("up", "slow");
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toBeVisible();
    //TODO: Find a solution for asserting the path shown on the map
  });

  /**Scenario: Getting Directions from 1 room to another room on the same floor
    * US-15 : As a user, I want to be able to view directions on the map
    * US-25 : AS a user, I would like to be able to search for a room
    * US-26 : As a user, I would like to be able to set a room as my start or destination
    * 1. Click on the search bar
    * 2. Enter the number of a room: "H813"
    * 3. Select the corresponding item from the dropdown list
    * 4. Click on GET DIRECTIONS button
    * 5. Check that TO search bar is filled with "H813"
    * 6. Click on the FROM search bar
    * 7. Enter the number of a room on the same floor: "H820"
    * 8. Select the corresponding item from the dropdown list
    * 9. Click on VIEW ROUTE
    * 10. Check that you are on the floor corresponding to the directions (8th floor)
    * 11. Check that the directions path exists
    */
  it.skip("Getting Directions from 1 room to another room on the same floor", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H813");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    //TODO: Fix the workaround (next line) to check that "H813" is written in the To search bar  
    await expect(element(by.label("H813"))).toExist();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("H825");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "fast");
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toBeVisible();
    //TODO: Find a solution for asserting the path shown on the map
  });

    /**Scenario: Get directions to an indoor point of interest
    * US-15 : As a user, I want to be able to view directions on the map
    * US-26 : As a user, I would like to be able to set a room as my start or destination
    * US-30 : As a user, I would like to be able to highlight points of interest such as washrooms, water fountains, stairs, etc.
    * 1. Click on the search bar
    * 2. Enter the number of a room: "H813"
    * 3. Select the corresponding item from the dropdown list
    * 4. Click on GET DIRECTIONS button
    * 5. Click on the FROM search bar
    * 6. Enter the number of a room on the same floor: "H8553"
    * 7. Select the corresponding item from the dropdown list
    * 8. Click on the TO search bar
    * 9. Enter the number of a point of interest: "water"
    * 10. Select the corresponding item from the dropdown list
    * 11. Click on VIEW ROUTE
    * 12. Check that the indoor map is shown
    * 13. Go back to the double search screen
    * 14. Click on the TO search
    * 15. Enter the number of another point of interest: "washroom"
    * 16. Select the corresponding item from the dropdown list
    * 17. Click on VIEW ROUTE
    * 18. Check that the indoor map is shown
    */
   it.skip("Get directions to an indoor point of interest", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H813");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("H853");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_ToSearchBarView")).tap();
    await element(by.id("DoubleSearch_ToSearchBarView")).typeText("water");
    await element(by.id("DoubleSearch_ToSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "slow");
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toBeVisible();
    await element(by.id("BottomMenu_IndoorMapExitBuildingButton")).tap();
    await expect(element(by.id("DoubleSearch_ScreenView"))).toBeVisible();
    await element(by.id("DoubleSearch_ToSearchBarView")).tap();
    await element(by.id("DoubleSearch_ToSearchBarView")).tapBackspaceKey();
    await element(by.id("DoubleSearch_ToSearchBarView")).typeText("washroom");
    await element(by.id("DoubleSearch_ToSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "slow");
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toBeVisible();
    //TODO: Find a solution for asserting the path shown on the map
  });

  /** Scenario: Getting Directions from 1 room to another room on different floors
   * US-15 : As a user, I want to be able to view directions on the map
   * US-25 : AS a user, I would like to be able to search for a room
   * US-26 : As a user, I would like to be able to set a room as my start or destination
   * US-31 : As a user, I would like to be able to generate directions to rooms between floors
   * 1. Click on the search bar
   * 2. Enter the number of a room: "H813"
   * 3. Select the corresponding item from the dropdown list
   * 4. Click on GET DIRECTIONS button
   * 5. Check that TO search bar is filled with "H813"
   * 6. Click on the FROM search bar
   * 7. Enter the number of a room on a different floor: "H937"
   * 8. Select the corresponding item from the dropdown list
   * 9. Click on VIEW ROUTE
   * 10. Check that the selected floor corresponds to the FROM floor (9th floor)
   * 11. Check that the path on the FROM floor exists
   * 12. Select the TO room floor (8th floor)
   * 13. Check that the path on the TO floor exists
   */
  it("Getting directions from 1 room to another room on different floors", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H819");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    //TODO: Fix the workaround (next line) to check that "H813" is written in the To search bar  
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("H937");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "fast");
    //TODO: Find a solution for asserting the path shown on the map
    await element(by.id("FloorMenu_floorBarMenuView")).tapAtPoint({ x: 185, y: 23 });
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("right", "slow");
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("up", "slow");
    await element(by.id("BottomMenu_IndoorArrowUpToPreferenceMenu")).tapAtPoint({ x: 10, y: 20 });
    await element(by.id("PreferenceMenu_MobilityReducedButton")).tap();
    await element(by.id("PreferenceMenu_GoBackIcon")).tap();
    //TODO: Find a solution for asserting the path shown on the map
  });
});