document.addEventListener("DOMContentLoaded", function() {
    let users = JSON.parse(localStorage.getItem('users')) || [
        { email: "admin@plateauinc.com", firstName: "Plateau", lastName: "Admin1", status: "Active", role: "Web Administrator", installation: "Head Quarters" },
        { email: "newtestuser@yopmail.com", firstName: "nwetets", lastName: "user", status: "Active", role: "Team Lead", installation: "Head Quarters" },
        { email: "shilpa.r.kumbhar.ctr@army.mil", firstName: "Shilpa", lastName: "Kumbhar", status: "Active", role: "Team Lead", installation: "Head Quarters" },
        { email: "test_aaron.j.yaeger@army.mil", firstName: "Aaron", lastName: "Yaeger", status: "Active", role: "Installation ICAP Admin", installation: "Scranton Army Ammunition Plant" },
        { email: "test_Aaron.T.Brownell.ctr@army.mil", firstName: "Aaron", lastName: "Brownell", status: "Active", role: "Installation Administrator", installation: "US Army Kwajalein Atoll" },
        { email: "test_abdiel.f.lopez.ctr@army.mil", firstName: "Abdiel", lastName: "Lopez", status: "Active", role: "Installation User", installation: "Fort Bliss" },
        { email: "test_abigail.c.hauch.civ@army.mil", firstName: "Abigail", lastName: "Hauch", status: "Active", role: "Installation User", installation: "Aberdeen Proving Ground" },
        { email: "test_abigail.e.toohey.civ@army.mil", firstName: "Abby", lastName: "Toohey", status: "Active", role: "Installation Administrator", installation: "Pueblo Chemical Depot" },
        { email: "test_abigail.r.crismon.civ@army.mil", firstName: "Abigail", lastName: "Crismon", status: "InActive", role: "Installation User", installation: "US Army Garrison Italy" },
        { email: "test_abraham.cortesramirez.civ@army.mil", firstName: "Abraham", lastName: "Cortes Ramirez", status: "Active", role: "Installation User", installation: "Yuma Proving Ground" },
        { email: "premkumar.subbiahthangarajan.ctr@mail.mil1", firstName: "Premkumar", lastName: "Thangarajan", status: "InActive", role: "System Admin", installation: "Head Quarters" },
        { email: "adrienne.j.jordan.ctr@army.mil1", firstName: "Adrienne", lastName: "Jordan", status: "Active", role: "System Admin", installation: "Head Quarters" },
        { email: "brian.a.indre.ctr@mail.mil1", firstName: "Brian", lastName: "Indre", status: "InActive", role: "Web Administrator", installation: "Head Quarters" },
        { email: "corey.j.snyder2.ctr@army.mil1", firstName: "Corey", lastName: "Snyder", status: "Active", role: "Web Administrator", installation: "Head Quarters" },
        { email: "william.e.dzeda2.civ@army.mil1", firstName: "Bill", lastName: "Dzeda", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "GEKL0 - US Army Garrison Rheinland Pfalz, RO596 - Mihail Kogalniceanu Main Camp" },
        { email: "conversiondata@plateauinc.com1", firstName: "Conversion", lastName: "Data", status: "Active", role: "Survey Answerer,Survey Final Approver,System Admin,Web Administrator", installation: "Head Quarters" },
        { email: "kalyani.d.kondoori.ctr@mail.mil1", firstName: "Sowjanya", lastName: "Kotra", status: "InActive", role: "System Admin", installation: "Head Quarters" },
        { email: "andrew.j.lady.civ@army.mil1", firstName: "Jack", lastName: "Lady", status: "Active", role: "Survey Fourth Level Approver", installation: "US ARMY MATERIEL COMMAND, INSTALLATION MANAGEMENT COMMAND" },
        { email: "julie.a.halstead.civ@army.mil1", firstName: "Julie", lastName: "Halstead", status: "Active", role: "Survey Answerer,Survey First Level Approver,Survey Third Level Approver", installation: "ASA(ALT), US ARMY MATERIEL COMMAND" },
        { email: "chad.m.johnson2.civ@army.mil1", firstName: "Chad", lastName: "Johnson", status: "Active", role: "Survey Third Level Approver", installation: "US ARMY JOINT MUNITIONS COMMAND" },
        { email: "randy.a.doyle.civ@army.mil1", firstName: "Randy", lastName: "Doyle", status: "InActive", role: "Survey Answerer,Survey First Level Approver", installation: "19105 - Iowa Army Ammunition Plant" },
        { email: "william.hilger@aollc.biz1", firstName: "William", lastName: "Hilger", status: "Active", role: "Survey Answerer", installation: "19105 - Iowa Army Ammunition Plant" },
        { email: "keith.r.miller1.ctr@mail.mil1", firstName: "Keith", lastName: "Miller", status: "InActive", role: "Survey Answerer", installation: "19105 - Iowa Army Ammunition Plant" },
        { email: "nicholas.d.montgomery2.civ@mail.mil1", firstName: "Nicholas", lastName: "Montgomery", status: "InActive", role: "Survey Answerer", installation: "49575 - Tooele Army Depot" },
        { email: "kristyl.bentley.civ@army.mil1", firstName: "Kristyl", lastName: "Bentley", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "49575 - Tooele Army Depot" },
        { email: "lonnie.d.brown33.civ@army.mil1", firstName: "Lonnie", lastName: "Brown", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "49575 - Tooele Army Depot" },
        { email: "tyson.b.erickson.civ@army.mil1", firstName: "Tyson", lastName: "Erickson", status: "Active", role: "Survey Answerer", installation: "49575 - Tooele Army Depot" },
        { email: "d.t.johnson.civ@army.mil1", firstName: "Troy", lastName: "Johnson", status: "Active", role: "Survey Answerer", installation: "49575 - Tooele Army Depot" },
        { email: "jay.d.nelson10.civ@army.mil1", firstName: "Jay", lastName: "Nelsen", status: "Active", role: "Survey Answerer", installation: "49575 - Tooele Army Depot" },
        { email: "leonard.l.diioia.civ@army.mil1", firstName: "Len", lastName: "Diioia", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "51565 - Radford Army Ammunition Plant" },
        { email: "ross.b.jennings.civ@mail.mil1", firstName: "Brad", lastName: "Jennings", status: "InActive", role: "Survey Answerer", installation: "51565 - Radford Army Ammunition Plant" },
        { email: "sara.b.clark4.civ@army.mil1", firstName: "Sara", lastName: "Clark", status: "Active", role: "Survey Answerer,Survey First Level Approver,Survey Third Level Approver", installation: "29405 - Lake City Army Ammunition Plant, US ARMY JOINT MUNITIONS COMMAND" },
        { email: "timothy.r.tuttle8.civ@mail.mil1", firstName: "Tim", lastName: "Tuttle", status: "InActive", role: "Survey Answerer", installation: "42755 - Scranton Army Ammunition Plant" },
        { email: "traci.c.mcmurtrey.civ@army.mil1", firstName: "Traci", lastName: "McMurtrey", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "40520 - McAlester Army Ammunition Plant" },
        { email: "laura.peters8.civ@army.mil1", firstName: "Laura", lastName: "Peters", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "47305 - Holston Army Ammunition Plant" },
        { email: "michael.w.vestal.civ@mail.mil1", firstName: "Mike", lastName: "Vestal", status: "InActive", role: "Survey Answerer", installation: "47305 - Holston Army Ammunition Plant" },
        { email: "bruce.g.cole.civ@army.mil1", firstName: "Bruce", lastName: "Cole", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "47305 - Holston Army Ammunition Plant" },
        { email: "charles.r.king104.civ@army.mil1", firstName: "Chuck", lastName: "King", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "32225 - Hawthorne Army Depot" },
        { email: "foster.kenton.ctr@army.mil1", firstName: "Foster", lastName: "Kenton", status: "Active", role: "Survey Answerer", installation: "32225 - Hawthorne Army Depot" },
        { email: "kristi.l.lammel-schilling.ctr@army.mil1", firstName: "Kristi", lastName: "Lammel-Schilling", status: "Active", role: "Survey Answerer", installation: "32225 - Hawthorne Army Depot" },
        { email: "thomas.j.erickson18.ctr@army.mil1", firstName: "Tom", lastName: "Erickson", status: "Active", role: "Survey Answerer", installation: "32225 - Hawthorne Army Depot" },
        { email: "phillip.williams2.civ@mail.mil1", firstName: "Phillip", lastName: "Williams", status: "InActive", role: "Survey Answerer,Survey Second Level Approver", installation: "21045 - Blue Grass Army Depot" },
        { email: "andrew.d.dickson.civ@mail.mil1", firstName: "Andrew", lastName: "Dickson", status: "InActive", role: "Survey Answerer", installation: "21045 - Blue Grass Army Depot" },
        { email: "william.r.corrigan4.civ@army.mil1", firstName: "William", lastName: "Corrigan", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "47475 - Milan Army Ammunition Plant" },
        { email: "sarah.a.clem2.civ@army.mil1", firstName: "Sarah", lastName: "Clem", status: "Active", role: "Survey Answerer", installation: "05087 - Pine Bluff Arsenal" },
        { email: "kenneth.d.norman.civ@army.mil1", firstName: "Kenneth", lastName: "Norman", status: "InActive", role: "Survey Third Level Approver", installation: "INSTALLATION MANAGEMENT COMMAND" },
        { email: "douglas.a.warnock.civ@army.mil1", firstName: "Doug", lastName: "Warnock", status: "InActive", role: "Survey Answerer,Survey First Level Approver", installation: "42345 - Letterkenny Army Depot" },
        { email: "bryan.l.hoke.civ@army.mil1", firstName: "Bryan", lastName: "Hoke", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "42345 - Letterkenny Army Depot" },
        { email: "craig.m.kindlin.civ@army.mil1", firstName: "Craig", lastName: "Kindlin", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "42345 - Letterkenny Army Depot" },
        { email: "phillip.f.dark.civ@army.mil1", firstName: "Phillip", lastName: "Dark", status: "Active", role: "Survey Third Level Approver", installation: "US ARMY AVIATION AND MISSILE COMMAND" },
        { email: "timothy.c.gelhaus.civ@army.mil1", firstName: "Tim", lastName: "Gelhaus", status: "Active", role: "Survey Answerer, Survey First Level Approver", installation: "27864 - 88th Readiness Division" },
        { email: "craig.r.peters.ctr@army.mil1", firstName: "Craig", lastName: "Peters", status: "Active", role: "Survey Answerer", installation: "27864 - 88th Readiness Division" },
        { email: "martin.r.pansch.ctr@army.mil1", firstName: "Martin", lastName: "Pansch", status: "Active", role: "Survey Answerer", installation: "27864 - 88th Readiness Division" },
        { email: "duane.l.meighan.civ@army.mil1", firstName: "Duane", lastName: "Meighan", status: "Active", role: "Survey Answerer, Survey First Level Approver", installation: "27864 - 88th Readiness Division, 31895 - Mead LTA" },
        { email: "carrie.l.schafer3.ctr@army.mil1", firstName: "Carrie", lastName: "Schafer", status: "Active", role: "Survey Answerer", installation: "27864 - 88th Readiness Division" },
        { email: "wayne.e.mitsko.civ@army.mil1", firstName: "Wayne", lastName: "Mitsko", status: "InActive", role: "Survey Answerer", installation: "GQ010 - 9th Mission Support Command" },
        { email: "tyler.t.belko.ctr@army.mil1", firstName: "TYLER", lastName: "BELKO", status: "Active", role: "Survey Answerer", installation: "GQ010 - 9th Mission Support Command" },
        { email: "marybeth.s.racette.ctr@army.mil1", firstName: "Racette", lastName: "Marybeth", status: "Active", role: "Survey Answerer, Survey First Level Approver", installation: "GQ010 - 9th Mission Support Command" },
        { email: "andrew.p.geist.ctr@army.mil1", firstName: "Andrew", lastName: "Geist", status: "Active", role: "Survey Answerer", installation: "42560 - 99th Readiness Division" },
        { email: "dominic.l.vantassell.ctr@army.mil1", firstName: "Dominic", lastName: "Van Tassell", status: "Active", role: "Survey Answerer", installation: "42560 - 99th Readiness Division" },
        { email: "andrew.d.cangey.ctr@army.mil1", firstName: "Andrew", lastName: "Cangey", status: "InActive", role: "Survey Answerer", installation: "42560 - 99th Readiness Division" },
        { email: "daniel.b.vanvoorhis.ctr@army.mil1", firstName: "Daniel", lastName: "Van Voorhis", status: "Active", role: "Survey Answerer", installation: "42560 - 99th Readiness Division" },
        { email: "kevin.f.gashlin.ctr@army.mil1", firstName: "Kevin", lastName: "Gashlin", status: "Active", role: "Survey Answerer", installation: "42560 - 99th Readiness Division" },
        { email: "stacey.m.rosenquist.civ@mail.mil1", firstName: "Stacey", lastName: "Rosenquist", status: "InActive", role: "Survey Answerer", installation: "51869 - Arlington National Cemetery" },
        { email: "thomas.e.austin14.mil@army.mil1", firstName: "Thomas", lastName: "Austin", status: "InActive", role: "Survey First Level Approver", installation: "ARLINGTON NATIONAL CEMETERY" },
        { email: "karim.y.manji.civ@mail.mil1", firstName: "Karim", lastName: "Manji", status: "InActive", role: "Survey Fourth Level Approver", installation: "US ARMY MATERIEL COMMAND, INSTALLATION MANAGEMENT COMMAND" },
        { email: "jeffrey.r.muehlmann.civ@army.mil1", firstName: "Jeff", lastName: "Muehlmann", status: "Active", role: "Survey Fourth Level Approver", installation: "US ARMY MATERIEL COMMAND, INSTALLATION MANAGEMENT COMMAND" },
        { email: "julius.c.lomosbog.ctr@army.mil1", firstName: "Julius", lastName: "Lomosbog", status: "Active", role: "Survey Answerer", installation: "GQ010 - 9th Mission Support Command" },
        { email: "ramesh.s.melarkode.civ@army.mil1", firstName: "Ramesh", lastName: "Melarkode", status: "Active", role: "Survey Answerer, Survey First Level Approver", installation: "21045 - Blue Grass Army Depot" },
        { email: "keith.r.peterson12.ctr@army.mil1", firstName: "Keith", lastName: "Peterson", status: "Active", role: "Survey Answerer, Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "michael.s.mcmullen3.civ@army.mil1", firstName: "Michael", lastName: "Mcmullen", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "michelle.a.royal.civ@army.mil1", firstName: "Michelle", lastName: "Royal", status: "Active", role: "Survey Second Level Approver", installation: "ARMY RESERVE" },
        { email: "george.e.robitaille.civ@army.mil1", firstName: "George", lastName: "Robitaille", status: "InActive", role: "Survey Final Approver", installation: "Head Quarters" },
        { email: "frances.d.saunders.civ@army.mil1", firstName: "Fran", lastName: "Saunders", status: "Active", role: "Survey Final Approver", installation: "Head Quarters" },
        { email: "samuel.a.pierre.civ@army.mil1", firstName: "Samuel", lastName: "Pierre", status: "Active", role: "Survey Final Approver", installation: "Head Quarters" },
        { email: "leslie.l.stewart4.ctr@army.mil1", firstName: "Leslie", lastName: "Stewart", status: "Active", role: "Survey Answerer, Survey Second Level Approver", installation: "ARMY RESERVE" },
        { email: "kelly.a.dreyer.civ@army.mil1", firstName: "Kelly", lastName: "Dreyer", status: "Active", role: "Survey Second Level Approver", installation: "ARMY RESERVE" },
        { email: "morey.u.moore.civ@army.mil1", firstName: "Morey", lastName: "Moore", status: "Active", role: "Survey Answerer, Survey First Level Approver", installation: "06510 - 63rd Readiness Division" },
        { email: "edward.a.tebo.civ@army.mil1", firstName: "Edward", lastName: "Tebo", status: "Active", role: "Survey Answerer, Survey First Level Approver", installation: "27864 - 88th Readiness Division" },
        { email: "jacqueline.siciliano.civ@army.mil1", firstName: "Jacqueline", lastName: "Siciliano", status: "Active", role: "Survey Answerer, Survey First Level Approver", installation: "42560 - 99th Readiness Division" },
        { email: "connie.l.barnett.civ@army.mil1", firstName: "Connie", lastName: "Barnett", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "eric.r.beckley.civ@army.mil1", firstName: "Eric", lastName: "Beckley", status: "Active", role: "Survey Final Approver", installation: "Head Quarters" },
        { email: "wilford.u.griego.mil@army.mil1", firstName: "Wilford", lastName: "Griego", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "shawn.a.bethea.mil@army.mil1", firstName: "Shawn", lastName: "Bethea", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "benjamin.b.wallen.civ@army.mil1", firstName: "Benjamin", lastName: "Wallen", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "jeffrey.l.coron.ctr@army.mil1", firstName: "Jeffrey", lastName: "Coron", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "jon.a.mayes2.civ@army.mil1", firstName: "Jon", lastName: "Mayes II", status: "Active", role: "Survey Answerer, Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "john.t.yunker.civ@army.mil1", firstName: "John", lastName: "Yunker", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "jay.m.rubinoff.civ@army.mil1", firstName: "Jay", lastName: "Rubinoff", status: "Active", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "justin.k.gean.civ@army.mil1", firstName: "Justin", lastName: "Gean", status: "Active", role: "Survey Answerer, Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "tawana.r.spencer.civ@army.mil1", firstName: "Tawana", lastName: "Spencer", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "michael.j.schultz40.civ@army.mil1", firstName: "Michael", lastName: "Schultz40", status: "Active", role: "Survey Answerer, Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "phil.t.dao.civ@army.mil1", firstName: "Phil", lastName: "Dao", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "pamela.j.couch2.civ@army.mil1", firstName: "Pamela", lastName: "Couch2", status: "InActive", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "alisa.r.dickson.civ@army.mil1", firstName: "Alisa", lastName: "Dickson", status: "Active", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "phillip.e.williams6.civ@army.mil1", firstName: "Phillip", lastName: "Williams6", status: "Active", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD" },
        { email: "bradley.n.curvin.nfg@army.mil1", firstName: "Bradley", lastName: "Curvin", status: "Active", role: "Survey Answerer", installation: "010NG - JFHead Quarters AL ARNG" },
        { email: "broderick.o.pickett.mil@army.mil1", firstName: "Broderick", lastName: "Pickett", status: "Active", role: "Survey First Level Approver", installation: "010NG - JFHead Quarters AL ARNG" },
        { email: "dustin.m.bowers5.mil@army.mil1", firstName: "Dustin", lastName: "Bowers5", status: "Active", role: "Survey Answerer", installation: "010NG - JFHead Quarters AL ARNG" },
        { email: "george.b.tucker.nfg@army.mil1", firstName: "George", lastName: "Tucker", status: "Active", role: "Survey Answerer", installation: "010NG - JFHead Quarters AL ARNG" },
        { email: "heather.r.puckett4.nfg@army.mil1", firstName: "Heather", lastName: "Puckett4", status: "Active", role: "Survey Answerer", installation: "010NG - JFHead Quarters AL ARNG" },
        { email: "ryan.c.howard21.nfg@army.mil1", firstName: "Ryan", lastName: "Howard21", status: "Active", role: "Survey Answerer", installation: "010NG - JFHead Quarters AL ARNG" }, 
        {email: "tracy.l.hall67.nfg@army.mil1", firstName: "Tracy", lastName: "Hall67", status: "Active", role: "Survey Answerer", installation: "560NG - JFHQ WY ARNG"},
        {email: "vance.g.hobbs.civ@army.mil1", firstName: "Vance", lastName: "Hobbs", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "24015 - Aberdeen Proving Ground"},
        {email: "victor.a.fernandes.civ@army.mil1", firstName: "Victor", lastName: "Fernandes", status: "Active", role: "Survey Answerer", installation: "39335 - Joint System Manufacturing Center Lima"},
        {email: "wernerj1@michigan.gov1", firstName: "Wernerj1", lastName: "", status: "Active", role: "Survey Answerer", installation: "260NG - JFHQ MI ARNG"},
        {email: "wesley.e.sparks.civ@army.mil1", firstName: "Wesley", lastName: "Sparks", status: "Active", role: "Survey Answerer", installation: "05087 - Pine Bluff Arsenal"},
        {email: "william.a.overman6.civ@army.mil1", firstName: "William", lastName: "Overman", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "24355 - Fort George G Meade"},
        {email: "yuki.nakamoto.ln@army.mil1", firstName: "Yuki", lastName: "Nakamoto", status: "Active", role: "Survey Answerer", installation: "JA210 - USAG Japan"},
        {email: "lisa.a.pellet.civ@army.mil1", firstName: "Lisa", lastName: "Pellet", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "530NG - JFHQ WA ARNG"},
        {email: "donald.b.flournoy@us.army.mil1", firstName: "Donald", lastName: "Flournoy", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "020NG - JFHQ AK ARNG"},
        {email: "kerry.platt2.nfg@army.mil1", firstName: "Kerry", lastName: "Platt2.nfg", status: "Active", role: "Survey First Level Approver", installation: "130NG - JFHQ GA ARNG"},
        {email: "leslie.p.chau.nfg@army.mil1", firstName: "Leslie", lastName: "Chau", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "150NG - JFHQ HI ARNG"},
        {email: "jonathan.w.edgerly.nfg@army.mil1", firstName: "Jonathan", lastName: "Edgerly", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "260NG - JFHQ MI ARNG"},
        {email: "rita.d.mccarty.nfg@army.mil1", firstName: "Rita", lastName: "Mccarty", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "280NG - JFHQ MS ARNG"},
        {email: "rita.f.gaines.nfg@army.mil1", firstName: "Rita", lastName: "Gaines", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "280NG - JFHQ MS ARNG"},
        {email: "jody.l.mccall.civ@army.mil1", firstName: "Jody", lastName: "Mccall", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "290NG - JFHQ MO ARNG, 29505 - MTA CAMP CLARK NEVADA"},
        {email: "lawrence.a.vrtiska.nfg@army.mil1", firstName: "Lawrence", lastName: "Vrtiska", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "310NG - JFHQ NE ARNG"},
        {email: "william.d.domagall.mil@army.mil1", firstName: "William", lastName: "Domagall", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "460NG - JFHQ SD ARNG"},
        {email: "gregory.m.turner.nfg@army.mil1", firstName: "Gregory", lastName: "Turner", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "470NG - JFHQ TN ARNG"},
        {email: "sabrina.m.kirkpatrick.mil@army.mil1", firstName: "Sabrina", lastName: "Kirkpatrick", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "560NG - JFHQ WY ARNG"},
        {email: "chelsea.fletcher.nfg@army.mil1", firstName: "Chelsea", lastName: "Fletcher", status: "Active", role: "Survey Answerer", installation: "060NG - JFHQ CA ARNG"},
        {email: "john.t.sharp27.nfg@army.mil1", firstName: "John", lastName: "Sharp", status: "Active", role: "Survey Answerer", installation: "060NG - JFHQ CA ARNG"},
        {email: "matthew.t.victoria.nfg@army.mil1", firstName: "Matthew", lastName: "Victoria", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "060NG - JFHQ CA ARNG"},
        {email: "daniel.b.pearson.civ@army.mil1", firstName: "Daniel", lastName: "Pearson", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "21045 - Blue Grass Army Depot"},
        {email: "dandre.t.garrison.ctr@army.mil1", firstName: "Dandre", lastName: "Garrison", status: "Active", role: "Survey Final Approver", installation: "HQ"},
        {email: "birdjl@tag.scmd.state.sc.us1", firstName: "Jon", lastName: "Bird", status: "Active", role: "Survey Answerer", installation: "450NG - JFHQ SC ARNG"},
        {email: "nschlafer@govmail.state.nv.us1", firstName: "Nicholas", lastName: "Schlafer", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "320NG - JFHQ NV ARNG"},
        {email: "mark.a.hogan26.nfg@army.mil1", firstName: "Mark", lastName: "Hogan", status: "Active", role: "Survey Answerer", installation: "490NG - JFHQ UT ARNG"},
        {email: "nathan.long10.civ@army.mil1", firstName: "Nathan", lastName: "Long", status: "Active", role: "Survey Answerer", installation: "49295 - Dugway Proving Ground"},
        {email: "jennifer.nader.civ@army.mil1", firstName: "Dr. Jennifer", lastName: "Nader", status: "Active", role: "Survey Answerer", installation: "ITVI0 - US Army Garrison Italy"},
        {email: "candace.a.rock.civ@army.mil1", firstName: "Dr. Candace", lastName: "Rock", status: "Active", role: "Survey Third Level Approver", installation: "US ARMY CHEMICAL MATERIALS ACTIVITY"},
        {email: "chihiro.gleghorn2.civ@army.mil1", firstName: "Chihiro", lastName: "Gleghorn", status: "Active", role: "Survey Answerer", installation: "05087 - Pine Bluff Arsenal"},
        {email: "cheri.h.lewis.civ@army.mil1", firstName: "Cheri", lastName: "Lewis", status: "Active", role: "Survey Answerer", installation: "01012 - Anniston Army Depot"},
        {email: "preston.w.capers.mil@army.mil1", firstName: "Preston", lastName: "Capers", status: "Active", role: "Survey Second Level Approver", installation: "ARMY NATIONAL GUARD"},
        {email: "ashley.c.mcmahon2.civ@army.mil1", firstName: "Ashley", lastName: "Mcmahon", status: "Active", role: "Survey Answerer", installation: "51105 - Fort Belvoir"},
        {email: "ryan.t.maisano.civ@army.mil1", firstName: "Ryan", lastName: "Maisano", status: "Active", role: "Survey Answerer", installation: "51105 - Fort Belvoir"},
        {email: "daniel.d.dobbins.civ@army.mil1", firstName: "Daniel", lastName: "Dobbins", status: "Active", role: "Survey Answerer", installation: "51105 - Fort Belvoir"},
        {email: "doo.h.lee5.civ@army.mil1", firstName: "Doo", lastName: "Lee", status: "Active", role: "Survey Answerer", installation: "51105 - Fort Belvoir"},
        {email: "rebecca.j.young39.civ@army.mil1", firstName: "Rebecca", lastName: "Marson", status: "Active", role: "Survey Answerer", installation: "24355 - Fort George G Meade"},
        {email: "catherine.roberts25.civ@army.mil1", firstName: "Catherine", lastName: "Roberts", status: "Active", role: "Survey Answerer", installation: "51105 - Fort Belvoir"},
        {email: "david.j.balog.civ@army.mil1", firstName: "David", lastName: "Balog", status: "Active", role: "Survey Answerer", installation: "51105 - Fort Belvoir"},
        {email: "carlos.a.ariasochoa.civ@army.mil1", firstName: "Carlos", lastName: "AriasOchoa", status: "Active", role: "Survey Answerer", installation: "13025 - Fort Moore"},
        {email: "john.d.brant4.ctr@army.mil1", firstName: "John", lastName: "Brant", status: "Active", role: "Survey Answerer", installation: "29995 - Fort Leonard Wood"},
        {email: "nicole.o.mauro.ctr@army.mil1", firstName: "Nikki", lastName: "Mauro", status: "Active", role: "Survey Second Level Approver", installation: "ARMY RESERVE"},
        {email: "terrel.w.christie.ctr@army.mil1", firstName: "Terrel", lastName: "Christie", status: "Active", role: "Survey Second Level Approver", installation: "ARMY RESERVE"},
        {email: "kenedi.n.pope.civ@army.mil1", firstName: "Kenedi", lastName: "Pope", status: "Active", role: "Survey Second Level Approver", installation: "US ARMY MATERIEL COMMAND, INSTALLATION MANAGEMENT COMMAND"},
        {email: "loralie.m.austin.nfg@army.mil1", firstName: "Loralie", lastName: "Austin", status: "Active", role: "Survey Answerer", installation: "440NG - JFHQ RI ARNG"},
        {email: "craig.l.roy2.nfg@army.mil1", firstName: "Craig", lastName: "Roy", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "440NG - JFHQ RI ARNG"},
        {email: "teri.rising1@maryland.gov1", firstName: "Teri", lastName: "Rising", status: "Active", role: "Survey Answerer", installation: "240NG - JFHQ MD ARNG"},
        {email: "benson.amponsem@maryland.gov1", firstName: "Benson", lastName: "Amponsem", status: "Active", role: "Survey Answerer", installation: "240NG - JFHQ MD ARNG"},
        {email: "mary.grez@maryland.gov1", firstName: "Mary", lastName: "Grez", status: "Active", role: "Survey Answerer", installation: "240NG - JFHQ MD ARNG"},
        {email: "laura.canton@maryland.gov1", firstName: "Laura", lastName: "Canton", status: "Active", role: "Survey Answerer", installation: "240NG - JFHQ MD ARNG"},
        {email: "rebecca.kreatschman@maryland.gov1", firstName: "Rebecca", lastName: "Kreatschman", status: "Active", role: "Survey Answerer", installation: "240NG - JFHQ MD ARNG"},
        {email: "tassew.mekuria@maryland.gov1", firstName: "Tassew", lastName: "Mekuria", status: "Active", role: "Survey Answerer", installation: "240NG - JFHQ MD ARNG"},
        {email: "gregory.b.church.civ@army.mil1", firstName: "Gregory", lastName: "Church", status: "Active", role: "Survey Answerer", installation: "36993 - West Point Military Reservation"},
        {email: "elizabeth.e.bell-monnich.civ@army.mil1", firstName: "Elizabeth", lastName: "Bell-Monnich", status: "Active", role: "Survey Answerer", installation: "51315 - Fort Gregg-Adams"},
        {email: "dwight.d.coleman2.civ@army.mil1", firstName: "Dwight", lastName: "Coleman", status: "Active", role: "Survey Answerer", installation: "13055 - Fort Eisenhower"},
        {email: "jacqueline.p.hogg.civ@army.mil1", firstName: "Jacqueline", lastName: "Hogg", status: "Active", role: "Survey Answerer", installation: "22725 - Fort Johnson"},
        {email: "paola.i.soto-montero.civ@army.mil1", firstName: "Paola", lastName: "Soto-Montero", status: "Active", role: "Survey Answerer", installation: "48125 - Fort Bliss"},
        {email: "teresa.l.gregory3.nfg@army.mil1", firstName: "Teresa", lastName: "Gregory", status: "Active", role: "Survey Answerer", installation: "040NG - JFHQ AZ ARNG"},
        {email: "mckayla.g.gibeley.civ@army.mil1", firstName: "Mckayla", lastName: "Gibeley", status: "Active", role: "Survey Second Level Approver", installation: "ARMY RESERVE"},
        {email: "corey.m.webster2.nfg@army.mil1", firstName: "Corey", lastName: "Webster", status: "Active", role: "Survey Answerer", installation: "350NG - JFHQ NM ARNG"},
        {email: "kiara.t.takacs.nfg@army.mil1", firstName: "Kiara", lastName: "Takacs", status: "Active", role: "Survey Answerer", installation: "350NG - JFHQ NM ARNG"},
        {email: "stanislava.romih.civ@army.mil1", firstName: "Stanislava", lastName: "Romih", status: "Active", role: "Survey Answerer", installation: "04005 - Fort Huachuca"},
        {email: "arlan.f.kalina.nfg@army.mil1", firstName: "Arlan", lastName: "Kalina", status: "Active", role: "Survey Answerer", installation: "480NG - JFHQ TX ARNG"},
        {email: "donald.j.mclennan.nfg@army.mil1", firstName: "Donald", lastName: "Mclennan", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "460NG - JFHQ SD ARNG"},
        {email: "seth.b.alm.nfg@army.mil1", firstName: "Seth", lastName: "Alm", status: "Active", role: "Survey Answerer,Survey First Level Approver", installation: "320NG - JFHQ NV ARNG"},
        {email: "matthew.g.thorburn.civ@army.mil1", firstName: "Matthew", lastName: "Thorburn", status: "Active", role: "Survey Final Approver", installation: "HQ"}
    ];

    const roleOptions = {
        "AMC/IMCOM": ["Command Read Only", "EPAS Program Manager", "Installation User", "External EPAS Reviewer", "Accountable SUB Org Read Only", "Accountable SUB Org EPAS Manager", "Installation Manager", "External EPAS Approver", "Installation Administrator", "External EPAS Lead Reviewer", "Accountable SUB Org Manager"],
        "ARNG": ["EPAS Program Manager", "External EPAS Reviewer", "Installation Manager", "HQ ARNG Area Program Manager", "External EPAS Lead Reviewer", "Installation Read Only", "Installation User"],
        "USAR": ["Command Read Only", "EPAS Program Manager", "External EPAS Reviewer", "Installation User", "Installation Manager", "External EPAS Lead Reviewer", "Installation Read Only"]
    };

    const userTableBody = document.getElementById('userTableBody');
    const inviteUserModal = document.getElementById("inviteUserModal");
    const editUserModal = document.getElementById("editUserModal");
    const filterUserModal = document.getElementById("filterUserModal");

    const editUserForm = document.getElementById("editUserForm");
    const editEmailField = document.getElementById("editEmail");
    const editFirstNameField = document.getElementById("editFirstName");
    const editLastNameField = document.getElementById("editLastName");
    const editStatusField = document.getElementById("editStatus");
    const editRoleField = document.getElementById("editRole");
    const editSubRoleField = document.getElementById("editSubRole");
    const editInstallationField = document.getElementById("editInstallation");

    const filterFirstNameField = document.getElementById("filterFirstName");
    const filterLastNameField = document.getElementById("filterLastName");
    const filterStatusField = document.getElementById("filterStatus");
    const filterRoleField = document.getElementById("filterRole");
    const filterInstallationField = document.getElementById("filterInstallation");

    function populateSubRoleOptions(roleSelect, subRoleSelect) {
        roleSelect.addEventListener('change', function() {
            const selectedRole = this.value;
            subRoleSelect.innerHTML = '';
            subRoleSelect.style.display = selectedRole ? 'block' : 'none';

            if (selectedRole && roleOptions[selectedRole]) {
                roleOptions[selectedRole].forEach(subRole => {
                    const option = document.createElement('option');
                    option.value = subRole;
                    option.textContent = subRole;
                    subRoleSelect.appendChild(option);
                });
            }
        });
    }

    const inviteRoleSelect = document.getElementById('inviteRole');
    const inviteSubRoleSelect = document.getElementById('inviteSubRole');
    const editRoleSelect = document.getElementById('editRole');
    const editSubRoleSelect = document.getElementById('editSubRole');

    populateSubRoleOptions(inviteRoleSelect, inviteSubRoleSelect);
    populateSubRoleOptions(editRoleSelect, editSubRoleSelect);

    function updateTable(filteredUsers = users) {
        userTableBody.innerHTML = '';
        filteredUsers.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="user-email">${user.email}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td style="color: ${user.status === 'Active' ? 'green' : 'red'};">${user.status}</td>
                <td>${user.role}</td>
                <td>${user.installation}</td>
                <td class="action-icons">
                    <span class="edit-icon">🖊️</span>
                    <span class="delete-icon">❌</span>
                </td>
            `;
            userTableBody.appendChild(row);
        });

        document.querySelectorAll('.edit-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const email = this.parentElement.parentElement.querySelector(".user-email").innerText;
                const user = users.find(u => u.email === email);
                if (user) {
                    editEmailField.value = user.email;
                    editFirstNameField.value = user.firstName;
                    editLastNameField.value = user.lastName;
                    editStatusField.value = user.status;
                    const [mainRole, subRole] = user.role.split(' - ');
                    editRoleField.value = mainRole;
                    editRoleField.dispatchEvent(new Event('change'));
                    editSubRoleField.value = subRole;
                    editInstallationField.value = user.installation;
                    editUserModal.style.display = "block";
                    editUserModal.classList.add('bigger-modal');
                }
            });
        });

        document.querySelectorAll('.delete-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const email = this.parentElement.parentElement.querySelector(".user-email").innerText;
                const confirmation = confirm(`Confirmation: Are you sure you want to delete user with email '${email}'?`);
                if (confirmation) {
                    users = users.filter(u => u.email !== email);
                    localStorage.setItem('users', JSON.stringify(users));
                    updateTable();
                }
            });
        });
    }

    updateTable();

    const inviteUserBtn = document.getElementById('inviteUserBtn');
    inviteUserBtn.onclick = function() {
        inviteUserModal.style.display = "block";
        inviteUserModal.classList.add('bigger-modal');
    }

    const filterUserBtn = document.getElementById('filterUserBtn');
    filterUserBtn.onclick = function() {
        filterUserModal.style.display = "block";
        filterUserModal.classList.add('bigger-modal');
    }

    const spanInvite = document.getElementsByClassName("close")[0];
    spanInvite.onclick = function() {
        inviteUserModal.style.display = "none";
    }

    const spanFilter = document.getElementById("filterClose");
    spanFilter.onclick = function() {
        filterUserModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == inviteUserModal) {
            inviteUserModal.style.display = "none";
        } else if (event.target == filterUserModal) {
            filterUserModal.style.display = "none";
        } else if (event.target == editUserModal) {
            editUserModal.style.display = "none";
        }
    }

    const addInviteBtn = document.getElementById('addInviteBtn');
    addInviteBtn.onclick = function() {
        const email = document.getElementById('inviteEmail').value;
        const firstName = document.getElementById('inviteFirstName').value;
        const lastName = document.getElementById('inviteLastName').value;
        const status = document.getElementById('inviteStatus').value;
        const role = document.getElementById('inviteRole').value;
        const subRole = document.getElementById('inviteSubRole').value;
        const installation = document.getElementById('inviteInstallation').value;

        users.push({ email, firstName, lastName, status, role: `${role} - ${subRole}`, installation });

        localStorage.setItem('users', JSON.stringify(users));
        updateTable();

        document.getElementById('inviteUserForm').reset();
        inviteUserModal.style.display = "none";
    }

    const editSaveBtn = document.getElementById('editSaveBtn');
    editSaveBtn.onclick = function() {
        const email = editEmailField.value;
        const firstName = editFirstNameField.value;
        const lastName = editLastNameField.value;
        const status = editStatusField.value;
        const role = editRoleField.value;
        const subRole = editSubRoleField.value;
        const installation = editInstallationField.value;

        const index = users.findIndex(u => u.email === email);
        if (index !== -1) {
            users[index] = { email, firstName, lastName, status, role: `${role} - ${subRole}`, installation };
            localStorage.setItem('users', JSON.stringify(users));
            updateTable();
            editUserModal.style.display = "none";
        }
    }

    const editCancelBtn = document.getElementById('editCancelBtn');
    editCancelBtn.onclick = function() {
        editUserModal.style.display = "none";
    }

    const applyFilterBtn = document.getElementById('applyFilterBtn');
    applyFilterBtn.onclick = function() {
        const firstName = filterFirstNameField.value.toLowerCase();
        const lastName = filterLastNameField.value.toLowerCase();
        const status = filterStatusField.value;
        const role = filterRoleField.value.toLowerCase();
        const installation = filterInstallationField.value.toLowerCase();

        const filteredUsers = users.filter(user => {
            return (!firstName || user.firstName.toLowerCase().includes(firstName)) &&
                   (!lastName || user.lastName.toLowerCase().includes(lastName)) &&
                   (!status || user.status === status) &&
                   (!role || user.role.toLowerCase().includes(role)) &&
                   (!installation || user.installation.toLowerCase().includes(installation));
        });

        updateTable(filteredUsers);
        filterUserModal.style.display = "none";
    }

    const resetFilterBtn = document.getElementById('resetFilterBtn');
    resetFilterBtn.onclick = function() {
        filterFirstNameField.value = '';
        filterLastNameField.value = '';
        filterStatusField.value = '';
        filterRoleField.value = '';
        filterInstallationField.value = '';
        updateTable();
        filterUserModal.style.display = "none";
    }

    const clearFilterBtn = document.getElementById('clearFilterBtn');
    clearFilterBtn.onclick = function() {
        updateTable();
    }

});
