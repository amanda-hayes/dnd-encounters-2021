(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{11:function(e,t,r){},32:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r(1),n=r(18),s=r.n(n),o=(r(32),r(11),r(2)),l=r(3),i=r(13),j=r(4),b=r.n(j),h=r(7),d=r(6);var u=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1],s=function(){var e=Object(h.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dnd-encounters-2021.herokuapp.com/api/characters");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,n(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(h.a)(b.a.mark((function e(t){var a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dnd-encounters-2021.herokuapp.com/api/characters/".concat(t),{method:"DELETE",headers:{"Content-type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,s=r.filter((function(e){return e._id!==c._id})),n(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),j=Object(c.useState)([]),u=Object(d.a)(j,2),O=u[0],x=u[1],p=function(){var e=Object(h.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dnd-encounters-2021.herokuapp.com/api/randomChar");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,x(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==O.length){e.next=2;break}return e.abrupt("return");case 2:if(t=Math.round(Math.random()*(O.length-1)),a=O[t],console.log("char dupe: "+r.includes(a.name)),console.log(a.name),e.prev=6,!r.includes(a.name)){e.next=13;break}c=O.filter((function(e){return e.name!==a.name})),x(c),m(),e.next=20;break;case 13:return e.next=15,fetch("https://dnd-encounters-2021.herokuapp.com/api/characters",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 15:e.sent,s=O.filter((function(e){return e.name!==a.name})),x(s),Object(i.a)(r),n([].concat(Object(i.a)(r),[a]));case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s(),p()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsxs)("div",{className:"character-background",children:[Object(a.jsxs)("div",{className:"header-style",children:[Object(a.jsx)("h1",{className:"my-characters-heading",children:"My Adventuring Party"}),Object(a.jsx)("p",{children:"View and manage all your characters, or create a new one."}),Object(a.jsxs)("div",{children:["Create a New Character",Object(a.jsx)(o.b,{to:"/CreateCharacterForm",children:Object(a.jsx)("button",{children:"CREATE"})}),"Generate a random character for me",Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),m()},children:"GENERATE"})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{id:"character-list",children:Object(a.jsx)("ul",{children:Object(a.jsx)(a.Fragment,{children:r.map((function(e){if("NPC"!==e.characterType)return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:e.thumbnail,id:"thumbnail"}),e.name," ",Object(a.jsx)("br",{}),e.race," | ",e.characterClass,Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"button",children:Object(a.jsx)(o.b,{to:"/characters/".concat(e._id),children:"VIEW"})}),Object(a.jsx)("button",{children:Object(a.jsx)(o.b,{to:"/UpdateCharacterForm/".concat(e._id),children:"EDIT"})}),Object(a.jsxs)("button",{onClick:function(t){l(e._id)},children:["DELETE"," "]})]},e._id)}))})})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"Ready to start adventuring?"}),Object(a.jsx)(o.b,{to:"/Tavern",children:Object(a.jsx)("button",{children:"Let's Go!"})})]})]})]})};var O=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),r=t[0],n=t[1],s=Object(l.g)("/Characters/:id"),i=function(){var e=Object(h.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dnd-encounters-2021.herokuapp.com/api/characters/".concat(s.params.id));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,n(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsxs)("div",{className:"parchment-background",children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("h1",{id:"character-sheet-heading",children:[r.name,Object(a.jsx)("br",{}),"Character Sheet"]}),Object(a.jsxs)("div",{id:"character-container",children:[Object(a.jsxs)("div",{id:"character-stats-image",children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{src:r.image})]}),Object(a.jsxs)("div",{id:"stats-list",children:[Object(a.jsx)("label",{children:"Name:"})," ",r.name,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Race:"})," ",r.race,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Pronouns:"})," ",r.pronouns,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Class:"})," ",r.characterClass,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"HP:"})," ",r.HP,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Main Weapon:"})," ",r.weapon,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Main Attack:"})," ",r.attack,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Armor Class:"})," ",r.armorClass,Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Motto:"}),Object(a.jsx)("br",{}),' "',r.catchphrases,'"',Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Backstory:"}),Object(a.jsx)("br",{}),' "',r.backstory,'"',Object(a.jsx)("br",{}),Object(a.jsx)("button",{children:Object(a.jsx)(o.b,{to:"/UpdateCharacterForm/".concat(r._id),children:"EDIT CHARACTER"})})]})]})]})]})},x=function(e){var t=Object(c.useRef)(null),r=Object(c.useRef)(null),n=Object(c.useRef)(null),s=Object(c.useRef)(null),i=Object(c.useRef)(null),j=Object(c.useRef)(null),d=Object(c.useRef)(null),u=Object(c.useRef)(null),O=Object(c.useRef)(null),x=Object(c.useRef)(null),p=Object(l.g)("/UpdateCharacterForm/:id").params.id,m=function(){var a=Object(h.a)(b.a.mark((function a(c){var o,l,h,m,v,f,g,y,C,w,T;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),o=t.current.value,l=n.current.value,h=s.current.value,m=r.current.value,v=i.current.value,f=j.current.value,g=d.current.value,y=u.current.value,C=O.current.value,w=x.current.value,T=JSON.stringify({name:o,race:l,characterClass:h,pronouns:m,HP:v,weapon:f,attack:g,armorClass:y,catchphrases:C,backstory:w}),c.currentTarget.reset(),a.prev=13,a.next=16,fetch("https://dnd-encounters-2021.herokuapp.com/characters/api/".concat(p),{method:"PUT",headers:{"Content-type":"application/json"},body:T});case 16:a.sent,alert("Character Updated!"),e.history.push("/characters"),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(13),console.error(a.t0);case 24:case"end":return a.stop()}}),a,null,[[13,21]])})));return function(e){return a.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsxs)("div",{className:"update-background",children:[Object(a.jsx)("div",{id:"update-breadcrumbs",children:Object(a.jsx)(o.b,{to:"/Characters",children:"Go Back"})}),Object(a.jsxs)("div",{className:"heading-with-form",children:[Object(a.jsx)("h2",{id:"update-char-h2",children:"Update Character"}),Object(a.jsxs)("form",{onSubmit:m,children:[Object(a.jsx)("label",{children:"Character Name:"}),Object(a.jsx)("input",{type:"text",name:"name",ref:t}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Character Pronouns:"}),Object(a.jsx)("input",{type:"text",name:"pronouns",ref:r}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Race:"}),Object(a.jsxs)("select",{className:"select",ref:n,children:[Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"Half Elf",children:"Elf"}),Object(a.jsx)("option",{value:"Gnome",children:"Gnome"}),Object(a.jsx)("option",{value:"Half Orc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"Aasimar",children:"Aasimar"}),Object(a.jsx)("option",{value:"Dragonborn",children:"Dragonborn"}),Object(a.jsx)("option",{value:"Tabaxi",children:"Tabaxi"}),Object(a.jsx)("option",{value:"Centaur",children:"Centaur"}),Object(a.jsx)("option",{value:"Halfling",children:"Halfling"}),Object(a.jsx)("option",{value:"Halfling",children:"Dwarf"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Class:"}),Object(a.jsxs)("select",{className:"select",ref:s,children:[Object(a.jsx)("option",{value:"Fighter",children:"Fighter (Tank)"}),Object(a.jsx)("option",{value:"Wizard",children:"Wizard (DPS)"}),Object(a.jsx)("option",{value:"Rogue",children:"Rogue (stabby stabby)"}),Object(a.jsx)("option",{value:"Cleric",children:"Cleric (Healer)"}),Object(a.jsx)("option",{value:"Druid",children:"Druid"}),Object(a.jsx)("option",{value:"Monk",children:"Monk"}),Object(a.jsx)("option",{value:"Paladin",children:"Paladin"}),Object(a.jsx)("option",{value:"Ranger",children:"Ranger"}),Object(a.jsx)("option",{value:"Sorcerer",children:"Sorcerer"}),Object(a.jsx)("option",{value:"Sorcerer",children:"Warlock"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"HP"}),Object(a.jsx)("select",{className:"select",ref:i,children:Object(a.jsx)("option",{value:"Default",children:"12"})}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Attack:"}),Object(a.jsxs)("select",{className:"select",ref:d,children:[Object(a.jsx)("option",{value:"Sword Slash",children:"Sword Slash"}),Object(a.jsx)("option",{value:"Magic Missile",children:"Magic Missile"}),Object(a.jsx)("option",{value:"Druid",children:"Shillelagh"}),Object(a.jsx)("option",{value:"Monk",children:"Fury of Blows"}),Object(a.jsx)("option",{value:"Eldritch Blast",children:"Eldritch Blast"}),Object(a.jsx)("option",{value:"Acid Splash",children:"Acid Splash"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Armor Class"}),Object(a.jsx)("select",{className:"select",ref:u,children:Object(a.jsx)("option",{value:"Default",children:"15"})}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Weapon:"}),Object(a.jsxs)("select",{className:"select",ref:j,children:[Object(a.jsx)("option",{value:"Greatsword",children:"Greatsword"}),Object(a.jsx)("option",{value:"Wand",children:"Wand"}),Object(a.jsx)("option",{value:"Dagger",children:"Dagger"}),Object(a.jsx)("option",{value:"Longbow",children:"Longbow"}),Object(a.jsx)("option",{value:"Rapier",children:"Rapier"}),Object(a.jsx)("option",{value:"Maul",children:"Maul"}),Object(a.jsx)("option",{value:"Crossbow",children:"Crossbow"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Catchphrases:"}),Object(a.jsxs)("select",{className:"select",ref:O,children:[Object(a.jsx)("option",{value:"Nobody makes me bleed my own blood!",children:"'Nobody makes me bleed my own blood!'"}),Object(a.jsx)("option",{value:"LEEEEROYYYYY JENKIIIINNNNSSSS!",children:"'LEEEEROYYYYY JENKIIIINNNNSSSS!'"}),Object(a.jsx)("option",{value:"I attack the darkness!",children:"'I attack the darkness!'"}),Object(a.jsx)("option",{value:"Can't we ever just have a normal field trip?",children:"'Can't we ever just have a normal field trip?'"}),Object(a.jsx)("option",{value:"Screw it, we're basically Gods!",children:"'Screw it, we're basically Gods!'"}),Object(a.jsx)("option",{value:"I\u2019m a lover, not a fighter",children:"'I\u2019m a lover, not a fighter'"}),Object(a.jsx)("option",{value:"Today is a good day to die.",children:"'Today is a good day to die.'"}),Object(a.jsx)("option",{value:"Last name Ever, first name Greatest",children:"'Last name Ever, first name Greatest'"}),Object(a.jsx)("option",{value:"I don't think that's such a good idea, Tommy",children:"'I don't think that's such a good idea, Tommy'"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Backstory:"}),Object(a.jsx)("input",{type:"textarea",name:"backstory",ref:x}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"UPDATE CHARACTER"})]})]})]})]})},p=function(e){var t=Object(c.useRef)(null),r=Object(c.useRef)(null),n=Object(c.useRef)(null),s=Object(c.useRef)(null),l=Object(c.useRef)(null),i=Object(c.useRef)(null),j=Object(c.useRef)(null),d=Object(c.useRef)(null),u=Object(c.useRef)(null),O=Object(c.useRef)(null),x=function(){var a=Object(h.a)(b.a.mark((function a(c){var o,l,j,h,x,p,m,v,f;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),o=t.current.value,l=r.current.value,j=n.current.value,h=s.current.value,12,x=i.current.value,15,p=d.current.value,m=u.current.value,v=O.current.value,f=JSON.stringify({name:o,pronouns:l,race:j,characterClass:h,hp:12,attack:x,armorClass:15,weapon:p,catchphrases:m,backstory:v}),c.currentTarget.reset(),a.prev=13,a.next=16,fetch("https://dnd-encounters-2021.herokuapp.com/api/characters",{method:"POST",headers:{"Content-type":"application/json"},body:f});case 16:a.sent,e.history.push("/Characters"),alert("Character Created!"),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(13),console.error(a.t0);case 24:case"end":return a.stop()}}),a,null,[[13,21]])})));return function(e){return a.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsxs)("div",{id:"create-char-form",children:[Object(a.jsx)("h2",{id:"create-char-h2",children:"Create New Character"}),Object(a.jsxs)("p",{children:["Feel free to play around with different characters and stats.",Object(a.jsx)("br",{}),"If you want more information on rolling a new character,"," ",Object(a.jsx)("a",{href:"https://www.instructables.com/Creating-a-DD-5e-Character-for-Beginners/",target:"_blank",id:"click-here",children:"click here."})]}),Object(a.jsxs)("form",{onSubmit:x,method:"post",children:[Object(a.jsx)("label",{children:"Character Name:"}),Object(a.jsx)("input",{type:"text",name:"name",ref:t}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Character Pronouns:"}),Object(a.jsx)("input",{type:"text",name:"pronouns",ref:r}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Race:"}),Object(a.jsxs)("select",{className:"select",ref:n,children:[Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"Half Elf",children:"Elf"}),Object(a.jsx)("option",{value:"Gnome",children:"Gnome"}),Object(a.jsx)("option",{value:"Half Orc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"Aasimar",children:"Aasimar"}),Object(a.jsx)("option",{value:"Dragonborn",children:"Dragonborn"}),Object(a.jsx)("option",{value:"Tabaxi",children:"Tabaxi"}),Object(a.jsx)("option",{value:"Centaur",children:"Centaur"}),Object(a.jsx)("option",{value:"Halfling",children:"Halfling"}),Object(a.jsx)("option",{value:"Halfling",children:"Dwarf"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Class:"}),Object(a.jsxs)("select",{className:"select",ref:s,children:[Object(a.jsx)("option",{value:"Fighter",children:"Fighter (Tank)"}),Object(a.jsx)("option",{value:"Wizard",children:"Wizard (DPS)"}),Object(a.jsx)("option",{value:"Rogue",children:"Rogue (stabby stabby)"}),Object(a.jsx)("option",{value:"Cleric",children:"Cleric (Healer)"}),Object(a.jsx)("option",{value:"Druid",children:"Druid"}),Object(a.jsx)("option",{value:"Monk",children:"Monk"}),Object(a.jsx)("option",{value:"Paladin",children:"Paladin"}),Object(a.jsx)("option",{value:"Ranger",children:"Ranger"}),Object(a.jsx)("option",{value:"Sorcerer",children:"Sorcerer"}),Object(a.jsx)("option",{value:"Sorcerer",children:"Warlock"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"HP"}),Object(a.jsx)("select",{className:"select",ref:l,children:Object(a.jsx)("option",{value:"Default",children:"12"})}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Attack:"}),Object(a.jsxs)("select",{className:"select",ref:i,children:[Object(a.jsx)("option",{value:"Sword Slash",children:"Sword Slash"}),Object(a.jsx)("option",{value:"Magic Missile",children:"Magic Missile"}),Object(a.jsx)("option",{value:"Druid",children:"Shillelagh"}),Object(a.jsx)("option",{value:"Monk",children:"Fury of Blows"}),Object(a.jsx)("option",{value:"Eldritch Blast",children:"Eldritch Blast"}),Object(a.jsx)("option",{value:"Acid Splash",children:"Acid Splash"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Armor Class"}),Object(a.jsx)("select",{className:"select",ref:j,children:Object(a.jsx)("option",{value:"Default",children:"15"})}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Weapon:"}),Object(a.jsxs)("select",{className:"select",ref:d,children:[Object(a.jsx)("option",{value:"Greatsword",children:"Greatsword"}),Object(a.jsx)("option",{value:"Wand",children:"Wand"}),Object(a.jsx)("option",{value:"Dagger",children:"Dagger"}),Object(a.jsx)("option",{value:"Longbow",children:"Longbow"}),Object(a.jsx)("option",{value:"Rapier",children:"Rapier"}),Object(a.jsx)("option",{value:"Maul",children:"Maul"}),Object(a.jsx)("option",{value:"Crossbow",children:"Crossbow"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Catchphrases:"}),Object(a.jsxs)("select",{className:"select",ref:u,children:[Object(a.jsx)("option",{value:"Nobody makes me bleed my own blood!",children:"'Nobody makes me bleed my own blood!'"}),Object(a.jsx)("option",{value:"LEEEEROYYYYY JENKIIIINNNNSSSS!",children:"'LEEEEROYYYYY JENKIIIINNNNSSSS!'"}),Object(a.jsx)("option",{value:"I attack the darkness!",children:"'I attack the darkness!'"}),Object(a.jsx)("option",{value:"Can't we ever just have a normal field trip?",children:"'Can't we ever just have a normal field trip?'"}),Object(a.jsx)("option",{value:"Screw it, we're basically Gods!",children:"'Screw it, we're basically Gods!'"}),Object(a.jsx)("option",{value:"I\u2019m a lover, not a fighter",children:"'I\u2019m a lover, not a fighter'"}),Object(a.jsx)("option",{value:"Today is a good day to die.",children:"'Today is a good day to die.'"}),Object(a.jsx)("option",{value:"Last name Ever, first name Greatest",children:"'Last name Ever, first name Greatest'"}),Object(a.jsx)("option",{value:"I don't think that's such a good idea, Tommy",children:"'I don't think that's such a good idea, Tommy'"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Backstory:"}),Object(a.jsx)("input",{type:"textarea",name:"backstory",rows:"10",cols:"30",ref:O}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Create Character",id:"submit-btn"})]})]})]})},m=(r(22),r(12)),v=r.p+"static/media/wizardbook.54a04d8b.png";var f=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(!1),l=Object(d.a)(s,2),i=l[0],j=l[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),u=h[0],O=h[1],x=Object(c.useState)(!1),p=Object(d.a)(x,2),f=p[0],g=p[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsxs)("div",{id:"tavern-background-image",children:[Object(a.jsxs)(m.a,{open:r,onClose:function(){return n(!1)},center:!0,classNames:{overlay:"tavern-overlay",modal:"tavern-modal"},children:[Object(a.jsx)("h2",{children:"So it begins..."}),Object(a.jsx)("p",{children:"In a land of Myth and a time of Legend there lived a group of adventurers who's destinies would sculpt the future of the world. It all started in a little tavern in a little village when a little gnome spilled their little drink onto an abnormally large tome belonging to an old Wizard...."}),Object(a.jsx)("button",{onClick:function(){return j(!0)},children:"BEGIN"})]}),Object(a.jsxs)(m.a,{open:i,onClose:function(){return j(!1)},center:!0,classNames:{overlay:"tavern-overlay",modal:"tavern-modal"},children:[Object(a.jsx)("h1",{children:"Party time!"}),Object(a.jsxs)("p",{children:["Tavern music is playing loudly, the drinks are flowing and you are reminiscing with your adventuring party.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),'"Oi! Thiss Is may thissessmahsoooong!" says a tipsy gnome as she spills some ale on a Wizard\'s Tome.',Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),'The old Wizard says, "Whoa there...watch yourself, gnome! This book is THE Adventurers Registry of Legend! It\'s said that any adventurer who signs their name in this book is to go off on a quest in which the results will shape the future of the world as we know it!"',Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),'"Oowwhhh shorry shir!" says the tipsy gnome. "I dii..diddnn...dddiddidnnn....was an axethdent. \'Tis my birthhday toodayy!" The Gnome leans closer to the Wizard and whispers "Ohh what\'re ye doin frienly wiz..um...wiz..." and she promptly passes out as she falls out of her chair and onto the floor.',Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"The old Wizard says \"Mmm... I'm afraid it's not interested in you, little one...\" They raise their gaze and lock eyes with you.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),'"You there, on the other hand," they say. " I have much to discuss with you! Come, sit, enjoy an ale on me while I tell you a story from a long long time ago..."']}),Object(a.jsx)("button",{onClick:function(){return O(!0)},children:"GO ON...."})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(m.a,{open:u,onClose:function(){return O(!1)},center:!0,classNames:{overlay:"tavern-overlay",modal:"tavern-modal"},children:[Object(a.jsx)("h1",{children:"Pull up a chair!"}),Object(a.jsx)("img",{src:v,id:"wizard-book-image"}),Object(a.jsxs)("p",{children:["The old wizard tells you a tale of intrigue and courage, of magic and mystery, of treasure and toil, of monsters and men. Suddenly, you see a glow coming from the tome in his hands.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Finally, he says \"Ahhh yes, so it seems the tome finds you worthy of such a quest. Well now, let's see here, where we are to send you...hmm?\" He licks his index finger and turns a page. \"It says: Behold, Adventurers! The quest is rather simple, however the consequences are severe...I require, on the Isle of Sapphire, a small goldfish... For you'll find me in the depths of Xanthar's Lair. Think you're up to the task?\""]}),Object(a.jsx)("button",{onClick:function(){return g(!0)},children:"ACCEPT QUEST"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(m.a,{open:f,onClose:function(){return g(!1)},center:!0,classNames:{overlay:"tavern-overlay",modal:"tavern-modal"},children:[Object(a.jsx)("h1",{children:"Wonderful!"}),Object(a.jsx)("p",{classNames:{modal:"battle-modal"},children:'"Retrieve the item and meet me back in this tavern when you are done. Now get a move on...and good luck, adventurer. You\'re going to need it."'}),Object(a.jsx)(o.b,{to:"./battle",children:Object(a.jsx)("button",{classNames:{overlay:"tavern-overlay",modal:"tavern-modal"},children:"LET'S GO"})})]})]})]})},g=r.p+"static/media/beholder.3a114013.jpeg",y=r.p+"static/media/d20.5439ca43.png",C=r.p+"static/media/d20natone.677e6a09.png";var w=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(!0),j=Object(d.a)(s,2),u=j[0],O=j[1],x=function(){return O(!1)},p=Object(c.useState)(!1),v=Object(d.a)(p,2),f=v[0],w=v[1],T=function(){return w(!1)},k=Object(c.useState)(!1),E=Object(d.a)(k,2),N=E[0],S=E[1],A=function(){return S(!1)},R=Object(c.useState)([]),I=Object(d.a)(R,2),H=I[0],D=I[1],M=Object(l.f)(),Y=function(){var e=Object(h.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dnd-encounters-2021.herokuapp.com/api/characters");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,n(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();function L(){return Math.floor(20*Math.random())+1}function P(e){var t=Object(i.a)(r),a=t.find((function(e){return"NPC"===e.characterType}));if(a._id!==e.target.value){var c=L();c>=a.armorClass?(a.HP-=4,alert("It's a hit! The Beholder takes 4 damage!"),a.HP<=0&&(M.push("/YouWin"),alert("You did it! You looted the monster and retrieved the precious goldfish!"))):alert("You rolled a ".concat(c," . You missed!"));var s=t.shift();n([].concat(Object(i.a)(t),[s]))}else{var o=t.filter((function(e){return"NPC"!==e.characterType})),l=o[Math.floor(Math.random()*o.length)],j=L();if(j>=l.armorClass?(l.HP-=8,alert(l.name+" was attacked and hit for 8 damage!")):alert("Monster rolled a ".concat(j," . It's a miss!")),l.HP<=0){alert("Oh no! "+l.name+" passed out!");var b=t.filter((function(e){return e._id!==l._id})),h=b.shift();n([].concat(Object(i.a)(b),[h]))}else{var d=t.shift();n([].concat(Object(i.a)(t),[d]))}}1===r.length&&r[0]._id===a._id&&(alert("Oh no! Congratulations on your TPK! You lose Dungeons and Dragons and now have to create new characters and form a new party. Bummer!"),M.push("/YouLose"))}function F(e){alert(r.find((function(t){return t._id===e.target.value})).catchphrases.split(".")[0])}return Object(c.useEffect)((function(){Y(),D(),S(),w()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/tavern",children:"ADVENTURE"})]}),Object(a.jsxs)("div",{className:"battle-background",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("img",{src:C,alt:"d20natone",className:"D20natone-photo"}),Object(a.jsx)("img",{src:y,alt:"d20",className:"D20-photo"}),Object(a.jsx)("br",{}),Object(a.jsxs)(m.a,{open:u,onClose:x,center:!0,children:[Object(a.jsx)("h2",{children:"On your way!"}),Object(a.jsx)("p",{classNames:{overlay:"tavern-overlay",modal:"tavern-modal"},children:"You're traveling through the forest....suddenly...you hear a terrifying sound. The blood drains from your party member's faces as you search for the source."}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:x,id:"tavern-button",children:"OKAY"})]}),Object(a.jsx)("button",{onClick:function(){return w(!0)},children:"WHAT'S THAT SOUND?"}),Object(a.jsxs)(m.a,{open:f,onClose:T,center:!0,className:"battle-modal p",children:[Object(a.jsx)("h2",{children:"Oh no!"}),Object(a.jsx)("p",{children:"A Beholder appears and it's guarding the treasure you so desperately need! There's no getting out of this without a fight. It's time to roll for initiative!"}),Object(a.jsx)("img",{src:g,alt:"beholder"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:T,id:"tavern-button",children:"FIGHT"})]})]}),Object(a.jsx)("button",{onClick:function(e){var t=Object(i.a)(r).map((function(e){return e.initiative=L(),S(!0),e})),a="";t.map((function(e){20===e.initiative?a+=e.name+" rolled a natural "+e.initiative+"....OH YEAH.....CRIT!.":1===e.initiative?a+=e.name+" rolled a natural "+e.initiative+"....Oh boy.....AUTOMATIC FAIL! .":a+=e.name+" rolled a "+e.initiative+"        .      "})),D(a),n(t.sort((function(e,t){return t.initiative-e.initiative})))},children:"ROLL INITIATIVE"}),Object(a.jsxs)(m.a,{open:N,onClose:A,center:!0,className:"battle-modal",children:[Object(a.jsx)("h1",{children:"Initiative Rolls"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:H}),Object(a.jsx)("button",{onClick:A,children:"OKAY"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{id:"battle-page-h2",children:"Characters"}),Object(a.jsx)("ul",{children:r.map((function(e){return Object(a.jsxs)("li",{id:"battle-character-list",children:[Object(a.jsx)("img",{src:e.thumbnail,id:"thumbnail"}),e.name," ",Object(a.jsx)("br",{})," HP: ",e.HP," | Armor Class:"," ",e.armorClass," | INIT: ",e.initiative,Object(a.jsx)("br",{}),Object(a.jsx)("button",{value:e._id,onClick:F,children:"SHOUT"}),Object(a.jsx)("button",{value:e._id,onClick:P,children:"ATTACK"})]},e._id)}))})]})]})};var T=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsx)("div",{className:"homepage",children:Object(a.jsxs)("div",{id:"homepage-content",children:[Object(a.jsx)("h1",{id:"home-heading",children:" Welcome to D&D Encounters"}),Object(a.jsx)("p",{children:"Create your characters, form your party and get ready for an adventure!"}),Object(a.jsx)(o.b,{to:"/characters",children:Object(a.jsx)("button",{children:"GET STARTED"})})]})})]})},k=r.p+"static/media/wizard.7fd16f9f.png";var E=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsxs)("div",{id:"you-win-page",children:[Object(a.jsx)("h1",{id:"you-win-h1",children:"Congratulations!"}),Object(a.jsx)("img",{src:k,alt:"wizard"}),Object(a.jsxs)("div",{id:"you-win-verbiage",children:[Object(a.jsx)("p",{children:"You slayed the Beholder and returned the goldfish to the old Wizard. He greets you warmly with a grin on his face. \"Welcome back, adventurers! It's so nice to see you alive and well. The world is now safer and my precious goldfish has been returned. I'm sure I don't have to tell you that the tale of your exploits will travel far and wide.\""}),Object(a.jsx)("p",{children:'"Please, take this as a thank you for the wonderful deed you have done. I hope I can count on you in the future for new quests and adventures!"'}),Object(a.jsx)("h2",{children:"You have received 25 gold!"}),Object(a.jsx)("p",{children:"You're well on your way to upgrading your gear and weapons, buying potions, and procuring fine trinkets and jewelry!"}),Object(a.jsxs)("p",{children:["At that very moment, the tavern maid approaches your table.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),'"Thanks for your patronage to the Stag and Lion. Here\'s your bill."',Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"You look at the bill. It's 25 gold. Evidently, one of your party members bought a celebratory round for everyone in the tavern.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Ah, well. At least you're leaving with a smile on your lips, a tale to tell and an thoroughly engrossed audience."]}),Object(a.jsx)("h1",{id:"you-win-h1",children:"The End"})]})]})]})};var N=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"topnav",children:[Object(a.jsx)(o.b,{to:"/",children:"HOME"}),Object(a.jsx)(o.b,{to:"/characters",children:"CHARACTERS"}),Object(a.jsx)(o.b,{to:"/createcharacterform",children:"CREATE"}),Object(a.jsx)(o.b,{to:"/battle",children:"BATTLE"})]}),Object(a.jsx)("h1",{children:"Your party has been defeated. Oh, well. It was fun while it lasted!"}),Object(a.jsx)("p",{children:"Form a new party and start again!"})]})};var S=function(){return Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:T}),Object(a.jsx)(l.a,{path:"/Characters",exact:!0,component:u}),Object(a.jsx)(l.a,{path:"/Characters/:id",component:O}),Object(a.jsx)(l.a,{path:"/CreateCharacterForm",exact:!0,component:p}),Object(a.jsx)(l.a,{path:"/UpdateCharacterForm/:id",exact:!0,component:x}),Object(a.jsx)(l.a,{path:"/Tavern",component:f}),Object(a.jsx)(l.a,{path:"/Battle",component:w}),Object(a.jsx)(l.a,{path:"/YouWin",component:E}),Object(a.jsx)(l.a,{path:"/YouLose",component:N})]})})})},A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),A()}},[[43,1,2]]]);
//# sourceMappingURL=main.4b5394ce.chunk.js.map