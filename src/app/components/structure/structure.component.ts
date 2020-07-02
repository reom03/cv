import { Component, OnInit } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {FilesService} from '../../services/files.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  TREE_DATA: ProjectNode[] = [
    {
      name: 'Raul Ortiz',
      expandable: true,
      className: '',
      isExpanded: true,
      level: 0,
    },
    {
      name: 'About me',
      expandable: false,
      level: 1,
      className: 'fas fa-user-circle color-pink',
    },
    {
      name: 'Education',
      expandable: false,
      level: 1,
      className: 'fas fa-graduation-cap color-yellow',
    }, {
      name: 'Work Experience',
      expandable: false,
      level: 1,
      className: 'fas fa-id-card-alt color-red',
    }, {
      name: 'Skills',
      expandable: false,
      className: 'fas fa-code color-pink',
      level: 1
    }, {
      name: 'Languages',
      expandable: false,
      level: 1,
      className: 'fas fa-language color-lightBlue',
    }
  ];
  treeControl = new FlatTreeControl<ProjectNode>(
    node => node.level, node => node.expandable);

  dataSource = new ArrayDataSource(this.TREE_DATA);

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
  }
  hasChild = (_: number, node: ProjectNode) => node.expandable;

  getParentNode(node: ProjectNode): any{
    const nodeIndex = this.TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.TREE_DATA[i].level === node.level - 1) {
        return this.TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ProjectNode): boolean{
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }

  selectTab(tab): void {
    this.filesService.openTab(tab);
  }
}
/** Flat node with expandable and level information */
interface ProjectNode {
  expandable: boolean;
  name: string;
  level: number;
  className: string;
  isExpanded?: boolean;
}
