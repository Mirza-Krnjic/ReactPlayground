# React vs Angular Change Detection

## React Change Detection

[Good youtube React Change Detection explanation (click me)](https://www.youtube.com/watch?v=AwW7olQ84Qs&t=187s)

![first react DOM demo](https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?ssl=1)

Causes of rerender often are: state, props ..ect

![second react DOM demo](https://miro.medium.com/v2/resize:fit:1276/1*InX4By1HRVlNV2qqAMXtMA.jpeg)

> In react when Parent re-renders all the child components re-render aswell (because React assumes all components are not pure)

Not-pure: meaning the the render output does not only depend on the inputs that are provided to it.

Maybe the child component needs to render again to trigger API call, who knows

So react generates that virtual DOM multiple times but only edits the real DOM once once it sure its done.

It uses its Reconciliation algorithm

(React re-rendering logic, youtube)[https://www.youtube.com/watch?v=AwW7olQ84Qs]

- **Virtual DOM**: React creates a virtual DOM snapshot for efficient comparison.
- **Diffing Algorithm**: Utilizes a diffing algorithm to identify changes between the current and new virtual DOM.
- **Selective Updates**: Updates only the changed elements in the real DOM.
- **Batch Updates**: Batches multiple updates together for performance optimization.

## Angular Change Detection

![angula image 1](https://miro.medium.com/v2/resize:fit:2000/1*KrIqm7-40larFWM7SeU8wQ.png)

- **Zone.js**: Monitors asynchronous operations to automatically trigger change detection.
- **Immutable Data**: Encourages the use of immutable data structures to simplify change detection.
- **Manual Triggers**: Provides options to manually trigger change detection for fine-grained control.
- **Change Detection Strategy**: Supports setting a change detection strategy (`Default` or `OnPush`) at the component level for optimized rendering.

### Angular Component Structure View

ZONE.js listens to all browser behavour that might trigger a DOM change.

> The angular team has been working to make ZONE.js optional

- App (Root Component)
  - Header
  - Sidebar
    - SidebarItem
    - SidebarItem
  - MainContent
    - Article
    - Comments
      - Comment
      - Comment
    - RelatedArticles

In this example:

App is the root component, which encapsulates the entire application.

Header, Sidebar, and MainContent are child components of App.

Each component encapsulates a part of the user interface and logic, and Angular manages the interaction and communication between these components efficiently.

When data changes in one component, Angular's change detection mechanism ensures that the appropriate parts of the component tree are updated accordingly.

[Good youtube ZONE.js explanation (click me)](https://www.youtube.com/watch?v=lmrf_gPIOZU)

#### Angular Change Detection Strategies

In Angular, change detection strategies dictate how Angular determines if and when to update the DOM in response to changes in the application state. There are two primary change detection strategies:

- Default (ChangeDetectionStrategy.Default): In this strategy, Angular automatically checks every component in the component tree for changes every time a change detection cycle is triggered, regardless of whether the component's input properties have changed. This can lead to suboptimal performance, especially in large applications, as it can result in unnecessary checks of components that have not been affected by changes.

- OnPush (ChangeDetectionStrategy.OnPush): With this strategy, Angular only checks a component for changes if its input properties have changed, or if an event originating from the component or one of its children triggers change detection. This can significantly improve performance by reducing the number of components checked during change detection cycles.

Other strategies include:

- CheckOnce (ChangeDetectionStrategy.CheckOnce): This strategy checks a component for changes during its initialization but does not check it again afterwards. This is not commonly used and is somewhat similar to OnPush.

- Detached (ChangeDetectionStrategy.Detached): This strategy detaches the component from the change detection tree, meaning that Angular will not check the component for changes unless it is explicitly reattached. This is mainly used in advanced scenarios where manual control over change detection is necessary.

The most popular change detection strategy, especially in larger applications aiming for performance optimization, is the OnPush strategy. It encourages a more reactive programming style and helps minimize unnecessary change detection checks.

The default change detection strategy in Angular is the Default strategy. However, you can specify a different strategy for individual components using the changeDetection property in the @Component decorator. If not explicitly specified, components will use the default strategy.
