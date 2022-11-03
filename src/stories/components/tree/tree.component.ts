import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const TREE_DATA: ExampleFlatNode[] = [
  {
    name: '[Top Level]',
    expandable: true,
    level: 0,
  },
  {
    name: '[Level 1: Item 1]',
    expandable: false,
    level: 1,
  },
  {
    name: '[Level 1: Item 2]',
    expandable: false,
    level: 1,
  },
  {
    name: '[Level 1: Item 3]',
    expandable: false,
    level: 1,
  },
  {
    name: '[Top Level]',
    expandable: true,
    level: 0,
  },
  {
    name: '[Level 1: Item 1]',
    expandable: true,
    level: 1,
  },
  {
    name: '[Level 2: Item 2]',
    expandable: false,
    level: 2,
  },
  {
    name: '[Level 2: Item 1]',
    expandable: false,
    level: 2,
  },
  {
    name: '[Level 1: Item 2]',
    expandable: true,
    level: 1,
  },
  {
    name: '[Level 2: Item 1]',
    expandable: false,
    level: 2,
  },
  {
    name: '[Level 2: Item 2]',
    expandable: false,
    level: 2,
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

@Component({
  selector: 'storybook-tree',
  standalone: true,
  imports: [
    MatTreeModule,
    MatIconModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    MatButtonModule,
  ],
  template: `
    <cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
      <!-- This is the tree node template for leaf nodes -->
      <cdk-tree-node
        *cdkTreeNodeDef="let node"
        cdkTreeNodePadding
        [style.display]="shouldRender(node) ? 'flex' : 'none'"
        class="example-tree-node"
      >
        <!-- use a disabled button to provide padding for tree leaf -->
        <button mat-icon-button disabled></button>
        {{ node.name }}
      </cdk-tree-node>
      <!-- This is the tree node template for expandable nodes -->
      <cdk-tree-node
        *cdkTreeNodeDef="let node; when: hasChild"
        cdkTreeNodePadding
        [style.display]="shouldRender(node) ? 'flex' : 'none'"
        class="example-tree-node"
      >
        <button
          mat-icon-button
          cdkTreeNodeToggle
          [attr.aria-label]="'Toggle ' + node.name"
          (click)="node.isExpanded = !node.isExpanded"
          [style.visibility]="node.expandable ? 'visible' : 'hidden'"
        >
          <mat-icon class="mat-icon-rtl-mirror">
            {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
          </mat-icon>
        </button>
        {{ node.name }}
      </cdk-tree-node>
    </cdk-tree>
  `,
})
export default class Tree {
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }
}