---
title: Controls and UI Patterns
layout: guide
---

Controls and UI patterns help users interact with your extension and customize their experience. 

We've provided examples of controls that are used in Tableau. Using the exact styling of these components is optional.

* [Activity Indicators](#activity-indicators)
* [Buttons](#buttons)
* [Dialogs](#dialogs)
* [Dropdowns](#dropdowns)
* [Selectors](#selectors)
* [Text Fields](#text-fields)
* [Tooltips](#tooltips)

The controls described here use Tableau branding, accessible from the **[Color](Style Guidelines/6 - Color.md)** and **[Fonts](Style Guidelines/7 - Fonts.md)** sections of these design guidelines.

###### *At this time, we are only able to provide surface-level usage and design specifications for controls. We are working to make code for Tableau controls accessible to developers in the future.*

---

&nbsp;

## Activity Indicators 
When performing an action, let users know that your extension is currently doing something and isn’t static or stalled. Make sure your extension acknowledges the user’s interactions by providing some form of tangible feedback.

An activity indicator appears when a task is performed that will take an unknown amount of time, such as loading or synchronizing complex data. It disappears when the task is complete.


![activity spinner](imgs/3-activity_spinner-cover.png)

### Usage
These activity spinners used in Tableau run at one rotation per second, and are non-interactive. 

Using this exact spinner in your extension is optional. For alternate options, we recommend using activity indicators of similar sizes and variety to ensure that it works on varying background elements.

| Variations | Preview | SVG Code | How to use |
|---------------------|:---------:|:---:|---|
| **Large**<br>(50x50 px) | ![large gif](imgs/gifs/3-Large.gif) | [SVG](xml/large.xml) | Use only on light backgrounds <br> |
| **Large with underlay**<br>(65x65 px) | ![large with underlay gif](imgs/gifs/3-Large_with_Underlay.gif) | [SVG](xml/large-with-underlay.xml) | Use on light or complex backgrounds to provide better contrast |
| **Large on dark background**<br>(50x50 px) | ![large on dark background gif](imgs/gifs/3-Large_on_Dark_Background.gif) | [SVG](xml/large-on-dark-background.xml) | Use only on dark backgrounds |
| **Small on dark background**<br>(14x14 px) | ![small on dark background gif](imgs/gifs/3-Small_on_Dark_Background.gif) | [SVG](xml/small-on-dark-background.xml) | Use only on small elements with dark backgrounds |
| **Small**<br>(14x14 px) | ![small gif](imgs/gifs/3-Small.gif) | [SVG](xml/small.xml) | Use only on small elements with light backgrounds


&nbsp;

&nbsp;

&nbsp;

---

## Buttons
A button communicates what happens when a user touches it. Button labels can consist of text, an icon, or a combination of both.

![buttons](imgs/3-buttons-cover.png)

### Usage

| Button | How to use |
|----|:-----|
| **Call-to-Action  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**  | These buttons are primarily used in dialogues to indicate an action. Use colors to communicate function–for example, green is commonly used for confirmation buttons. Learn more about color usage at **[Colors](Style Guidelines/6 - Color.md)**.<br><br>You may also want to utilize branding practices on buttons. Learn more at **[Branding your Extension](Style Guidelines/4 - Branding your Extension.md)**. |
| **Greyscale** | Greyscale buttons are used either to indicate a secondary action, or a button that has been disabled and a particular action needs to be taken before proceeding. |
| **Text Button &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;** | This is a low-attention button, and should only be used to provide a secondary option in the case that the user wants to perform an action that isn’t the primary action. |
| **Icon** | Buttons can have icons to add a helpful visual. If you use icons, include a text label or a help tag that is activated on hover. |

&nbsp;

**Button Placement**

Button placement guidelines apply to Call-to-Action and Greyscale buttons.

![buttons placement](imgs/3-buttons-button_placement.png)

&nbsp;

**One Primary Button**

Primary buttons apply only to Call-to-Action buttons.

![buttons primary](imgs/3-buttons-one_primary_button.png)

&nbsp;

&nbsp;

### Specifications

![button specs](imgs/3-buttons-specs.png)

&nbsp;

&nbsp;

&nbsp;

---

## Dialogs

A dialog is a “conversation” between the system and the user, which often requests information or action from the user. For info about the extension configuration dialog, learn more at **[Extension Components and Modes](2 - Extension Components and Modes.md)**. 

### Standard Dialog
These dialogs are non-modal, meaning they can be used when the requested information is not essential to continue. The dialog can be left open while the user interacts with other components in the extension. 

![standard dialog](imgs/3-dialogs-standard.png)

&nbsp;

### Tab Dialogs
If you’d like to have multiple sections to your dialogs, you may use tabs to separate content. 

#### Top Tabs
Top tabs allow a dialog to contain several pages of content in one place. Use this variation to have 3 distinct sections of content. Do not exceed 3 top tabs.

![top tabs labeled](imgs/3-top_tabs_labeled.png)

&nbsp;

#### Side Tabs
If you need more tabs in a dialog than the top tab system can accommodate, it is appropriate to utilize the side tab style of navigation. Use this tab variation if you need 3 or more sections of content. Do not exceed 5 side tabs. 

![side tabs labeled](imgs/3-side_tabs_labeled.png)

&nbsp;

&nbsp;

### Specifications
Dialog content can vary widely, but consists of specific textual or UI elements that should meet some of the following standards.

##### Standard Dialog

![standard dialog specs](imgs/3-dialogs-standard_specs.png)

&nbsp;

##### Top Tab Dialog

![top tab dialog specs](imgs/3-dialogs-top_tabs_specs.png)

![top tab header specs](imgs/3-dialogs-top_tabs_header_specs.png)

&nbsp;

##### Side Tab Dialog

![side tab specs](imgs/3-dialogs-side_tabs_specs.png)

&nbsp;

##### Dialog Widths
Dialog height will vary based on content but width will fit into one of these standard sizes. 

![standard dialog widths](imgs/3-standard_dialog_widths.png)

&nbsp;

&nbsp;

&nbsp;

---

## Dropdowns

Dropdown controls allow multiple options to be expanded from a menu. Dropdowns have two main components: **Control and Menu**. 

![dropdowns cover](imgs/3-dropdowns-cover.png)

&nbsp;

### Usage

|  | How to use |
| --- | --- |
| **Controls &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;** | Dropdown controls have an arrow on the right side, which indicates the control is actionable. This button is primarily used in dialogues to indicate an action.  |
| **Menu** | A dropdown menu contains a group of selections. When a menu item is selected, the dropdown control is updated to reflect the user's new choice. |

&nbsp;

##### Control Variations

![control variations](imgs/3-dropdowns-control_variations.png)

|  | How to use |
| --- | --- |
| **Outline** | The outline style is the primary variation that should be used. It can be used by itself, on forms, or within dialogues.  |
| **Line**<br>(label optional) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Line style dropdowns are useful in areas that have cramped vertical space. This dropdown style can be stacked within panels to avoid a boxy wireframe feel. While the label is optional, we encourage using it to better inform users about the category of items. |
| **Text** | This style allows the user to access options from a dropdown or ﬂyout menu. This style works well in tool and start bars, as well as in dialogs and menus. |
| **Icon** | The icon style works best in small regions such as tool bars, and is great for switches that have several options. |

&nbsp;

##### Menu Variations

![menu variations](imgs/3-dropdowns-menu_variations.png)

|  | How to use |
| --- | --- |
| **Standard** | This is the primary dropdown menu style. If your dropdown menu has many items or needs more classification, consider implementing some of the other options pictured. |
| **Nested Flyout** | If your menu needs more broad categories to choose specific items from, it can have a nested flyout menu. |
| **Search** | Search can be added to dropdown menus. Use this variation if your menu may have many items in the list to allow users to easily search for a specific item.  |
| **Checkbox** | Checkboxes can be used for multi-select dropdowns. |
| **Compound** | Compound menus allow for items to be grouped by separate types. |

&nbsp;

##### Stacking Dropdowns

Use the line style when stacking several dropdowns on top of each other to avoid a boxy wireframe look and feel. 

![stacking dropdowns](imgs/3-dropdowns-stacking.png)

##### Dropdown Menus

There is no space between the control and the menu. The minimum menu width is 40px, and the maximum is 260px. Menus can be wider than the control, but should not be narrower.

![align control and menus](imgs/3-dropdowns-menu_align.png)

&nbsp;

&nbsp;

### Specifications
Design specifications are grouped by the type of control and their corresponding control states, then menu variations. 

##### Controls

![default controls+menu spec](imgs/3-dropdowns-controls_and_standard_menu_spec.png)

![line controls spec](imgs/3-dropdowns-line_controls_spec.png)

![icon control](imgs/3-dropdowns-icon_controls_spec.png)

##### Menus

![menu and flyout spec](imgs/3-dropdowns-menu_and_flyout_spec.png)

![menu variations spec](imgs/3-dropdowns-menu_variations_spec.png)

&nbsp;

&nbsp;

&nbsp;

---

## Selectors
Selectors are a broad family of controls within the interface. This family has been broken down into four categories: **Pickers, Sliders, Steppers, and Toggles**.

![selectors](imgs/3-selectors-cover.png)

&nbsp;

### Usage

|     | How to use    |
| --- | --- | 
| **Pickers** | Pickers enable users to make a selection from a list of options. Each picker has an icon control such as a checkbox or radio button. |
| **Sliders** | Sliders enable users to adjust totals without inputs via the keyboard. They are a convenient choice for selecting a value when there are known maximum and minimum values. |
| **Steppers** | Steppers enable users to click or tap on a control to change values. They often have a text input allowing the user to choose between keyboard input and mouse/tap input. |
| **Toggles** | Toggles are the simplest picker. They enable users to choose one item, while one or more items are off.  |

&nbsp;

### Specifications

##### Pickers

![pickers spec](imgs/3-selectors-pickers_spec.png)

##### Sliders

![sliders spec](imgs/3-selectors-sliders_spec.png)

##### Steppers

![steppers spec](imgs/3-selectors-steppers_spec.png)

##### Toggles

![toggle spec](imgs/3-selectors-toggle_spec.png)

&nbsp;

&nbsp;

&nbsp;

---

## Text Fields
Text fields are places in the user interface where users enter text or phrases, such as on a form or sign in page.

![text fields cover](imgs/3-text_fields_cover.png)

&nbsp;

### Usage

| &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | How to use    |
| --- | --- | 
| **Outline Text** | The outline style has a prominent appearance that can be used by itself, on forms, or within dialogues. |
| **Line Text** | The line text field can be used for stacking multiple fields within a panel to avoid a boxy wireframe feel. Line style text fields are useful in areas that have extremely limited vertical space.  |
| **Search** | Search boxes allow users to search for terms, and appear at the top of a page or dialog. |

&nbsp; 

##### Stacking Text Fields

Always use the line text field style in forms, or when fields are stacked.

![text fields stacking](imgs/3-text_fields_stacking.png)

&nbsp; 

### Specifications

##### Default

![text field specs](imgs/3-text_field_default_specs.png)

##### Search

![search field](imgs/3-text_field_search_specs.png)


&nbsp;

&nbsp;

&nbsp;

---

## Tooltips
Ideally, your users should be able to figure out how to use your extension without needing a guide. But to help users understand more context to the task they’re performing, you may utilize tooltips.

In general, tooltips are general small boxes that contain information about the item. When the user places their cursor over an item without clicking it (hover), a tooltip may appear.

![tooltips cover](imgs/3-tooltips.png)

&nbsp;

### Usage
Descriptive tooltips are always anchored to the element with which they are associated. Tooltips can help further describe controls without shifting the user’s attention away from the primary interface. You may want to put tooltips in some parts of your extension if you want to briefly explain the use of a particular control or section. 

##### Placement

Tooltips should not cover other icons in the toolbar, or block related content.

![tooltips placement](imgs/3-tooltips_placement.png)

##### Content

Include succinct copy that helps the user take their next step. 

![tooltips content](imgs/3-tooltips_content.png)

&nbsp;

### Specifications

![tooltips spec](imgs/3-tooltips_spec.png)


&nbsp;

&nbsp;

&nbsp;

---

<!-- 
### <div id="expand-box"><div id="expand-box-header">[<span style="float: right;">Style Guidelines &#8594; </span>](Style Guidelines)</div></div>

##### <div id="expand-box"><div id="expand-box-header">[<span style="float: left;">&#8592; 2 – Extension Components and Modes</span>](2 - Extension Components and Modes.md)</div></div>

-->
