import { Component, OnInit } from '@angular/core';
import * as biri from '../lib/biri';
import * as fingerprint from '../lib/fingerprintjs';
import * as fingerprint2 from '../lib/fingerprintjs2';
import * as client from 'node_modules/clientjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uuid';
  async ngOnInit() {
    // console.log('hi');
    // console.log(client);
    // const a = new client();
    // const b = a.getFingerprint();
    // console.log(b);


    setTimeout(function () {
      fingerprint2.get(function (components) {
        console.log('fingerprint:', components);

        const values = components.map(component => component.value);
        const murmur = fingerprint2.x64hash128(values.join(""), 31);
        console.log('fingerprint:', murmur);
      })
    }, 500);


    // const uniqueId = await biri();
    // const a = new fingerprint();
    // const fid1 = a.get();
    // const options = { fonts: { extendedJsFonts: true }, excludes: { userAgent: true } };
    // const b = fingerprint2.get( (components) => {
    //   const values = components.map((component) => {
    //     return component.value;
    //   });
    //   const murmur = fingerprint2.x64hash128(values.join(''), 31);
    //   console.log(murmur);
    //   console.log(values);


    // }, 500);
    // const fid2 = b.get();
    // debugger
    // console.log('biri :', uniqueId);
    // // alert('biri:' + uniqueId);
    // console.log('1 :', fid1);
    // alert('fingerprintjs1:' + fid1);

    // console.log('2 :', fid2);

    // localStorage.setItem('biri id', uniqueId);
  }


  versionCheck(version) {
    const v = localStorage.getItem('version');
    // check if version is present or if mismatch
    if (!v['vDesigner'] || v != version['vDesigner']) {
      // do something because new build deployed clear localstorage, logout or redirect to another page and set
      // latest version
      localStorage.clear();
      v['vDesigner'] = version;
      localStorage.setItem('version', v);
    }
  }
}

