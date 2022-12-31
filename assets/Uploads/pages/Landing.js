import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const onRectangle74Click = useCallback(() => {
    // Please sync "Todays-deals" to the project
  }, []);

  const onRectangle100Click = useCallback(() => {
    window.open("Signup");
  }, []);

  const onRectangle150Click = useCallback(() => {
    // Please sync "Todays-deals" to the project
  }, []);

  const onRectangle151Click = useCallback(() => {
    // Please sync "Todays-deals" to the project
  }, []);

  const onHelloSignInClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  const onStartHereTextClick = useCallback(() => {
    // Please sync "Signup" to the project
  }, []);

  const onGiftCardsClick = useCallback(() => {
    // Please sync "Todays-deals" to the project
  }, []);

  const onBestSellersClick = useCallback(() => {
    // Please sync "Todays-deals" to the project
  }, []);

  const onSignInSecurelyClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="landing">
      <img className="image-icon" alt="" src="../image@2x.png" />
      <img className="image-icon1" alt="" src="../image1@2x.png" />
      <img className="image-icon2" alt="" src="../image1@2x.png" />
      <img className="image-icon3" alt="" src="../image3@2x.png" />
      <img className="image-icon4" alt="" src="../image4@2x.png" />
      <img className="image-icon5" alt="" src="../image1@2x.png" />
      <img className="image-icon6" alt="" src="../image1@2x.png" />
      <img className="image-icon7" alt="" src="../image7@2x.png" />
      <img className="image-icon8" alt="" src="../image8@2x.png" />
      <img className="image-icon9" alt="" src="../image9@2x.png" />
      <img className="image-icon10" alt="" src="../image10@2x.png" />
      <img className="image-icon11" alt="" src="../image11@2x.png" />
      <img className="image-icon12" alt="" src="../image1@2x.png" />
      <img className="image-icon13" alt="" src="../image13@2x.png" />
      <img className="image-icon14" alt="" src="../image1@2x.png" />
      <img className="image-icon15" alt="" src="../image15@2x.png" />
      <img className="image-icon16" alt="" src="../image16@2x.png" />
      <img className="image-icon17" alt="" src="../image17@2x.png" />
      <img className="image-icon18" alt="" src="../image18@2x.png" />
      <img className="image-icon19" alt="" src="../image19@2x.png" />
      <img className="image-icon20" alt="" src="../image10@2x.png" />
      <img className="image-icon21" alt="" src="../image16@2x.png" />
      <img className="image-icon22" alt="" src="../image22@2x.png" />
      <img className="image-icon23" alt="" src="../image22@2x.png" />
      <img className="image-icon24" alt="" src="../image24@2x.png" />
      <img className="image-icon25" alt="" src="../image25@2x.png" />
      <img className="image-icon26" alt="" src="../image26@2x.png" />
      <img className="image-icon27" alt="" src="../image27@2x.png" />
      <img className="image-icon28" alt="" src="../image28@2x.png" />
      <img className="image-icon29" alt="" src="../image16@2x.png" />
      <img className="image-icon30" alt="" src="../image30@2x.png" />
      <img className="image-icon31" alt="" src="../image31@2x.png" />
      <img className="image-icon32" alt="" src="../image32@2x.png" />
      <img className="image-icon33" alt="" src="../image33@2x.png" />
      <img className="image-icon34" alt="" src="../image34@2x.png" />
      <img className="image-icon35" alt="" src="../image25@2x.png" />
      <img className="image-icon36" alt="" src="../image16@2x.png" />
      <img className="image-icon37" alt="" src="../image26@2x.png" />
      <img className="image-icon38" alt="" src="../image38@2x.png" />
      <img className="image-icon39" alt="" src="../image39@2x.png" />
      <img className="image-icon40" alt="" src="../image40@2x.png" />
      <img className="image-icon41" alt="" src="../image38@2x.png" />
      <img className="image-icon42" alt="" src="../image42@2x.png" />
      <img className="image-icon43" alt="" src="../image43@2x.png" />
      <button className="rectangle" autoFocus />
      <div className="rectangle1" />
      <img className="image-icon44" alt="" src="../image28@2x.png" />
      <button className="rectangle2" autoFocus />
      <div className="rectangle3" />
      <img className="image-icon45" alt="" src="../image45@2x.png" />
      <div className="rectangle4" />
      <div className="rectangle5" />
      <img className="image-icon46" alt="" src="../image34@2x.png" />
      <button className="rectangle6" autoFocus />
      <div className="rectangle7" />
      <img className="image-icon47" alt="" src="../image38@2x.png" />
      <button className="rectangle8" autoFocus />
      <div className="rectangle9" />
      <img className="image-icon48" alt="" src="../image9@2x.png" />
      <div className="rectangle10" />
      <div className="rectangle11" />
      <img className="image-icon49" alt="" src="../image16@2x.png" />
      <button className="rectangle12" autoFocus />
      <div className="rectangle13" />
      <img className="image-icon50" alt="" src="../image50@2x.png" />
      <div className="rectangle14" />
      <div className="rectangle15" />
      <div className="rectangle16" />
      <div className="rectangle17" />
      <div className="rectangle18" />
      <img className="image-icon51" alt="" src="../image51@2x.png" />
      <img className="image-icon52" alt="" src="../image52@2x.png" />
      <img className="image-icon53" alt="" src="../image53@2x.png" />
      <img className="image-icon54" alt="" src="../image54@2x.png" />
      <img className="image-icon55" alt="" src="../image55@2x.png" />
      <img className="image-icon56" alt="" src="../image56@2x.png" />
      <img className="image-icon57" alt="" src="../image33@2x.png" />
      <img className="image-icon58" alt="" src="../image58@2x.png" />
      <img className="image-icon59" alt="" src="../image59@2x.png" />
      <img className="image-icon60" alt="" src="../image60@2x.png" />
      <img className="image-icon61" alt="" src="../image61@2x.png" />
      <img className="image-icon62" alt="" src="../image7@2x.png" />
      <img className="image-icon63" alt="" src="../image63@2x.png" />
      <img className="image-icon64" alt="" src="../image4@2x.png" />
      <img className="image-icon65" alt="" src="../image65@2x.png" />
      <img className="image-icon66" alt="" src="../image66@2x.png" />
      <img className="image-icon67" alt="" src="../image67@2x.png" />
      <img className="image-icon68" alt="" src="../image68@2x.png" />
      <img className="image-icon69" alt="" src="../image22@2x.png" />
      <img className="image-icon70" alt="" src="../image70@2x.png" />
      <img className="image-icon71" alt="" src="../image71@2x.png" />
      <img className="image-icon72" alt="" src="../image72@2x.png" />
      <img className="image-icon73" alt="" src="../image42@2x.png" />
      <img className="image-icon74" alt="" src="../image74@2x.png" />
      <img className="image-icon75" alt="" src="../image75@2x.png" />
      <img className="image-icon76" alt="" src="../image76@2x.png" />
      <img className="image-icon77" alt="" src="../image26@2x.png" />
      <img className="image-icon78" alt="" src="../image78@2x.png" />
      <img className="image-icon79" alt="" src="../image79@2x.png" />
      <img className="image-icon80" alt="" src="../image31@2x.png" />
      <img className="image-icon81" alt="" src="../image40@2x.png" />
      <img className="image-icon82" alt="" src="../image82@2x.png" />
      <img className="image-icon83" alt="" src="../image83@2x.png" />
      <img className="image-icon84" alt="" src="../image84@2x.png" />
      <img className="image-icon85" alt="" src="../image85@2x.png" />
      <img className="image-icon86" alt="" src="../image86@2x.png" />
      <img className="image-icon87" alt="" src="../image87@2x.png" />
      <img className="image-icon88" alt="" src="../image88@2x.png" />
      <img className="image-icon89" alt="" src="../image88@2x.png" />
      <img className="image-icon90" alt="" src="../image16@2x.png" />
      <img className="image-icon91" alt="" src="../image78@2x.png" />
      <img className="image-icon92" alt="" src="../image92@2x.png" />
      <img className="image-icon93" alt="" src="../image30@2x.png" />
      <img className="image-icon94" alt="" src="../image94@2x.png" />
      <img className="image-icon95" alt="" src="../image16@2x.png" />
      <img className="image-icon96" alt="" src="../image74@2x.png" />
      <img className="image-icon97" alt="" src="../image97@2x.png" />
      <img className="image-icon98" alt="" src="../image98@2x.png" />
      <img className="image-icon99" alt="" src="../image88@2x.png" />
      <img className="image-icon100" alt="" src="../image88@2x.png" />
      <img className="image-icon101" alt="" src="../image40@2x.png" />
      <img className="image-icon102" alt="" src="../image16@2x.png" />
      <img className="image-icon103" alt="" src="../image103@2x.png" />
      <img className="image-icon104" alt="" src="../image78@2x.png" />
      <img className="image-icon105" alt="" src="../image105@2x.png" />
      <img className="image-icon106" alt="" src="../image106@2x.png" />
      <img className="image-icon107" alt="" src="../image92@2x.png" />
      <img className="image-icon108" alt="" src="../image108@2x.png" />
      <img className="image-icon109" alt="" src="../image30@2x.png" />
      <img className="image-icon110" alt="" src="../image110@2x.png" />
      <img className="image-icon111" alt="" src="../image111@2x.png" />
      <img className="image-icon112" alt="" src="../image112@2x.png" />
      <img className="image-icon113" alt="" src="../image113@2x.png" />
      <img className="image-icon114" alt="" src="../image32@2x.png" />
      <img className="image-icon115" alt="" src="../image115@2x.png" />
      <div className="rectangle19" />
      <img className="image-icon116" alt="" src="../image106@2x.png" />
      <button className="rectangle20" autoFocus />
      <div className="rectangle21" />
      <img className="image-icon117" alt="" src="../image117@2x.png" />
      <div className="rectangle22" />
      <div className="rectangle23" />
      <div className="rectangle24" />
      <div className="rectangle25" />
      <div className="rectangle26" />
      <img className="image-icon118" alt="" src="../image111@2x.png" />
      <button className="rectangle27" />
      <div className="rectangle28" />
      <img className="image-icon119" alt="" src="../image106@2x.png" />
      <button className="rectangle29" autoFocus />
      <div className="rectangle30" />
      <img className="image-icon120" alt="" src="../image120@2x.png" />
      <button className="rectangle31" autoFocus />
      <div className="rectangle32" />
      <img className="image-icon121" alt="" src="../image121@2x.png" />
      <button className="rectangle33" autoFocus />
      <div className="rectangle34" />
      <img className="image-icon122" alt="" src="../image27@2x.png" />
      <button className="rectangle35" autoFocus />
      <div className="rectangle36" />
      <img className="image-icon123" alt="" src="../image123@2x.png" />
      <button className="rectangle37" autoFocus />
      <div className="rectangle38" />
      <img className="image-icon124" alt="" src="../image124@2x.png" />
      <button className="rectangle39" autoFocus />
      <div className="rectangle40" />
      <img className="image-icon125" alt="" src="../image125@2x.png" />
      <button className="rectangle41" autoFocus />
      <div className="rectangle42" />
      <div className="rectangle43" />
      <div className="rectangle44" />
      <div className="rectangle45" />
      <img className="image-icon126" alt="" src="../image126@2x.png" />
      <button className="rectangle46" autoFocus />
      <div className="rectangle47" />
      <img className="image-icon127" alt="" src="../image127@2x.png" />
      <button className="rectangle48" autoFocus />
      <div className="rectangle49" />
      <div className="rectangle50" />
      <div className="rectangle51" />
      <div className="rectangle52" />
      <img className="image-icon128" alt="" src="../image128@2x.png" />
      <button className="rectangle53" autoFocus />
      <div className="rectangle54" />
      <div className="rectangle55" />
      <div className="rectangle56" />
      <div className="rectangle57" />
      <img className="image-icon129" alt="" src="../image16@2x.png" />
      <div className="rectangle58" />
      <div className="rectangle59" />
      <div className="rectangle60" />
      <div className="disability-customer-support">
        Disability Customer Support
      </div>
      <div className="previous-slide">Previous slide</div>
      <div className="next-slide">Next slide</div>
      <div className="up-to">Up to</div>
      <div className="div">42</div>
      <div className="off">% off</div>
      <div className="ends-in">Ends in</div>
      <div className="div1">08:22</div>
      <div className="up-to1">Up to</div>
      <div className="div2">30</div>
      <div className="off1">% off</div>
      <div className="ends-in1">Ends in</div>
      <div className="div3">08:22</div>
      <div className="div4">15</div>
      <div className="off2">% off</div>
      <div className="ends-in2">Ends in</div>
      <div className="div5">03:22</div>
      <div className="up-to2">Up to</div>
      <div className="div6">47</div>
      <div className="off3">% off</div>
      <div className="ends-in3">Ends in</div>
      <div className="div7">08:22</div>
      <div className="up-to3">Up to</div>
      <div className="div8">34</div>
      <div className="off4">% off</div>
      <div className="ends-in4">Ends in</div>
      <div className="div9">03:22</div>
      <div className="div10">$14.10</div>
      <div className="ends-in5">Ends in</div>
      <div className="div11">03:22</div>
      <div className="up-to4">Up to</div>
      <div className="div12">28</div>
      <div className="off5">% off</div>
      <div className="ends-in6">Ends in</div>
      <div className="div13">08:22</div>
      <div className="div14">44</div>
      <div className="off6">% off</div>
      <div className="ends-in7">Ends in</div>
      <div className="div15">08:22</div>
      <div className="div16">$89.99</div>
      <div className="div17">$</div>
      <div className="div18">89</div>
      <div className="div19">.</div>
      <div className="div20">99</div>
      <div className="was">Was:</div>
      <div className="div21">$159.99</div>
      <div className="div22">$159.99</div>
      <div className="deal">Deal</div>
      <div className="up-to5">Up to</div>
      <div className="div23">38</div>
      <div className="off7">% off</div>
      <div className="deal1">Deal</div>
      <div className="div24">35</div>
      <div className="off8">% off</div>
      <div className="deal2">Deal</div>
      <div className="div25">$129.99</div>
      <div className="div26">$</div>
      <div className="div27">129</div>
      <div className="div28">.</div>
      <div className="div29">99</div>
      <div className="list-price">List Price:</div>
      <div className="div30">$199.99</div>
      <div className="div31">$199.99</div>
      <div className="up-to6">Up to</div>
      <div className="div32">40</div>
      <div className="off9">% off</div>
      <div className="deal3">Deal</div>
      <div className="up-to7">Up to</div>
      <div className="div33">43</div>
      <div className="off10">% off</div>
      <div className="deal4">Deal</div>
      <div className="up-to8">Up to</div>
      <div className="div34">41</div>
      <div className="off11">% off</div>
      <div className="deal5">Deal</div>
      <div className="div35">30</div>
      <div className="off12">% off</div>
      <div className="deal6">Deal</div>
      <div className="up-to9">Up to</div>
      <div className="div36">42</div>
      <div className="off13">% off</div>
      <div className="deal7">Deal</div>
      <div className="up-to10">Up to</div>
      <div className="div37">42</div>
      <div className="off14">% off</div>
      <div className="deal8">Deal</div>
      <div className="up-to11">Up to</div>
      <div className="div38">46</div>
      <div className="off15">% off</div>
      <div className="deal9">Deal</div>
      <div className="div39">52</div>
      <div className="off16">% off</div>
      <div className="deal10">Deal</div>
      <div className="div40">$129.99</div>
      <div className="div41">$</div>
      <div className="div42">129</div>
      <div className="div43">.</div>
      <div className="div44">99</div>
      <div className="list-price1">List Price:</div>
      <div className="div45">$269.99</div>
      <div className="div46">$269.99</div>
      <div className="up-to12">Up to</div>
      <div className="div47">45</div>
      <div className="off17">% off</div>
      <div className="deal11">Deal</div>
      <div className="div48">17</div>
      <div className="off18">% off</div>
      <div className="deal12">Deal</div>
      <div className="div49">$149.99</div>
      <div className="div50">$</div>
      <div className="div51">149</div>
      <div className="div52">.</div>
      <div className="div53">99</div>
      <div className="list-price2">List Price:</div>
      <div className="div54">$179.99</div>
      <div className="div55">$179.99</div>
      <div className="div56">47</div>
      <div className="off19">% off</div>
      <div className="deal13">Deal</div>
      <div className="div57">$15.99</div>
      <div className="div58">$</div>
      <div className="div59">15</div>
      <div className="div60">.</div>
      <div className="div61">99</div>
      <div className="list-price3">List Price:</div>
      <div className="div62">$29.99</div>
      <div className="div63">$29.99</div>
      <div className="up-to13">Up to</div>
      <div className="div64">46</div>
      <div className="off20">% off</div>
      <div className="deal14">Deal</div>
      <div className="rectangle61" />
      <div className="image" />
      <div className="rectangle62" />
      <div className="rectangle63" />
      <div className="rectangle64" />
      <div className="image1" />
      <div className="rectangle65" />
      <div className="rectangle66" />
      <div className="rectangle67" />
      <div className="rectangle68" />
      <div className="rectangle69" />
      <div className="rectangle70" />
      <div className="rectangle71" />
      <div className="rectangle72" />
      <img className="image-icon130" alt="" src="../image130@2x.png" />
      <div className="rectangle73" />
      <input
        className="rectangle74"
        type="text"
        placeholder="Foodstuffs, Clothings and aparels, Utensils, Stationeries ....."
        autoFocus
        onClick={onRectangle74Click}
      />
      <div className="rectangle75" />
      <a className="rectangle76" />
      <button className="component-1default">
        <img className="vector-icon" alt="" src="../vector.svg" />
        <img
          className="dove-market-logos-3"
          alt=""
          src="../dove-marketlogos-3@2x.png"
        />
      </button>
      <img className="image-icon131" alt="" src="../image131@2x.png" />
      <div className="rectangle77" />
      <div className="rectangle78" />
      <div className="rectangle79" />
      <div className="rectangle80" />
      <div className="rectangle81" />
      <div className="rectangle82" />
      <div className="rectangle83" />
      <div className="rectangle84" />
      <div className="rectangle85" />
      <div className="rectangle86" />
      <div className="rectangle87" />
      <div className="rectangle88" />
      <div className="rectangle89" />
      <img className="image-icon132" alt="" src="../" />
      <div className="rectangle90" />
      <div className="rectangle91" />
      <div className="rectangle92" />
      <div className="rectangle93" />
      <img className="image-icon133" alt="" src="../image132@2x.png" />
      <a className="image-1" />
      <div className="rectangle94" />
      <a className="rectangle95" />
      <img className="image-icon134" alt="" src="../image134@2x.png" />
      <img className="image-icon135" alt="" src="../image135@2x.png" />
      <img className="image-icon136" alt="" src="../image136@2x.png" />
      <img className="image-icon137" alt="" src="../image137@2x.png" />
      <a className="rectangle96" />
      <img className="image-icon138" alt="" src="../image138@2x.png" />
      <a className="rectangle97" />
      <img className="image-icon139" alt="" src="../image139@2x.png" />
      <img className="image-icon140" alt="" src="../image140@2x.png" />
      <img className="image-icon141" alt="" src="../image141@2x.png" />
      <img className="image-icon142" alt="" src="../image142@2x.png" />
      <div className="rectangle98" />
      <div className="rectangle99" />
      <button
        className="rectangle100"
        autoFocus
        onClick={onRectangle100Click}
      />
      <div className="rectangle101" />
      <div className="rectangle102" />
      <img className="image-icon143" alt="" src="../image143@2x.png" />
      <a className="rectangle103" href="https://#" />
      <img className="image-icon144" alt="" src="../image144@2x.png" />
      <a className="rectangle104" />
      <img className="image-icon145" alt="" src="../image145@2x.png" />
      <div className="rectangle105" />
      <div className="rectangle106" />
      <div className="rectangle107" />
      <a className="rectangle108" />
      <img className="image-icon146" alt="" src="../image146@2x.png" />
      <img className="image-icon147" alt="" src="../image147@2x.png" />
      <img className="image-icon148" alt="" src="../image148@2x.png" />
      <img className="image-icon149" alt="" src="../image149@2x.png" />
      <a className="rectangle109" href="/clothing and apparels" />
      <img className="image-icon150" alt="" src="../image150@2x.png" />
      <img className="image-icon151" alt="" src="../image151@2x.png" />
      <img className="image-icon152" alt="" src="../image152@2x.png" />
      <img className="image-icon153" alt="" src="../image153@2x.png" />
      <a className="rectangle110" />
      <img className="image-icon154" alt="" src="../image154@2x.png" />
      <a className="rectangle111" />
      <img className="image-icon155" alt="" src="../image155@2x.png" />
      <img className="image-icon156" alt="" src="../image156@2x.png" />
      <img className="image-icon157" alt="" src="../image157@2x.png" />
      <img className="image-icon158" alt="" src="../image158@2x.png" />
      <img className="image-icon159" alt="" src="../image159@2x.png" />
      <img className="image-icon160" alt="" src="../image160@2x.png" />
      <img className="image-icon161" alt="" src="../image161@2x.png" />
      <button className="rectangle112" autoFocus />
      <button className="rectangle113" />
      <button className="icon-chevron-right" autoFocus>
        <img className="vector-icon1" alt="" src="../vector1.svg" />
      </button>
      <div className="rectangle114" />
      <a className="rectangle115" />
      <img className="image-icon162" alt="" src="../image162@2x.png" />
      <img className="image-icon163" alt="" src="../image163@2x.png" />
      <img className="image-icon164" alt="" src="../image164@2x.png" />
      <img className="image-icon165" alt="" src="../image165@2x.png" />
      <img className="image-icon166" alt="" src="../image166@2x.png" />
      <img className="image-icon167" alt="" src="../image167@2x.png" />
      <a className="rectangle116" />
      <img className="image-icon168" alt="" src="../image168@2x.png" />
      <img className="image-icon169" alt="" src="../image169@2x.png" />
      <img className="image-icon170" alt="" src="../image170@2x.png" />
      <img className="image-icon171" alt="" src="../image171@2x.png" />
      <a className="rectangle117" />
      <img className="image-icon172" alt="" src="../image172@2x.png" />
      <a className="rectangle118" />
      <img className="image-icon173" alt="" src="../image173@2x.png" />
      <img className="image-icon174" alt="" src="../image174@2x.png" />
      <img className="image-icon175" alt="" src="../image175@2x.png" />
      <img className="image-icon176" alt="" src="../image176@2x.png" />
      <a className="rectangle119" />
      <div className="rectangle120" />
      <img className="image-icon177" alt="" src="../image177@2x.png" />
      <div className="rectangle121" />
      <div className="rectangle122" />
      <div className="rectangle123" />
      <div className="rectangle124" />
      <div className="rectangle125" />
      <div className="rectangle126" />
      <img className="image-icon178" alt="" src="../image178@2x.png" />
      <div className="rectangle127" />
      <div className="rectangle128" />
      <img className="image-icon179" alt="" src="../image179@2x.png" />
      <div className="rectangle129" />
      <div className="rectangle130" />
      <img className="image-icon180" alt="" src="../image180@2x.png" />
      <div className="rectangle131" />
      <div className="rectangle132" />
      <img className="image-icon181" alt="" src="../image181@2x.png" />
      <div className="rectangle133" />
      <div className="rectangle133" />
      <img className="image-icon182" alt="" src="../image182@2x.png" />
      <div className="rectangle135" />
      <div className="rectangle136" />
      <img className="image-icon183" alt="" src="../image183@2x.png" />
      <div className="rectangle137" />
      <div className="rectangle138" />
      <img className="image-icon184" alt="" src="../image184@2x.png" />
      <div className="rectangle139" />
      <div className="rectangle140" />
      <img className="image-icon185" alt="" src="../image185@2x.png" />
      <div className="rectangle141" />
      <img className="image-icon186" alt="" src="../image186@2x.png" />
      <div className="rectangle142" />
      <div className="rectangle143" />
      <img className="image-icon187" alt="" src="../image187@2x.png" />
      <div className="rectangle144" />
      <div className="rectangle145" />
      <div className="rectangle146" />
      <img className="image-icon188" alt="" src="../image188@2x.png" />
      <img className="image-icon189" alt="" src="../image189@2x.png" />
      <img className="image-icon190" alt="" src="../image190@2x.png" />
      <img className="image-icon191" alt="" src="../image191@2x.png" />
      <img className="image-icon192" alt="" src="../image192@2x.png" />
      <img className="image-icon193" alt="" src="../image193@2x.png" />
      <div className="rectangle147" />
      <img className="image-icon194" alt="" src="../image194@2x.png" />
      <a className="rectangle148" />
      <img className="image-icon195" alt="" src="../image195@2x.png" />
      <img className="image-icon196" alt="" src="../image196@2x.png" />
      <img className="image-icon197" alt="" src="../image197@2x.png" />
      <img className="image-icon198" alt="" src="../image198@2x.png" />
      <a className="rectangle149" />
      <img className="image-icon199" alt="" src="../image199@2x.png" />
      <a className="rectangle150" onClick={onRectangle150Click} />
      <img className="image-icon200" alt="" src="../image200@2x.png" />
      <img className="image-icon201" alt="" src="../image201@2x.png" />
      <img className="image-icon202" alt="" src="../image202@2x.png" />
      <img className="image-icon203" alt="" src="../image203@2x.png" />
      <a className="rectangle151" onClick={onRectangle151Click} />
      <img className="image-icon204" alt="" src="../image204@2x.png" />
      <img className="image-icon205" alt="" src="../image205@2x.png" />
      <img className="image-icon206" alt="" src="../image206@2x.png" />
      <img className="image-icon207" alt="" src="../image207@2x.png" />
      <div className="rectangle152" />
      <img className="image-icon208" alt="" src="../image208@2x.png" />
      <img className="image-icon209" alt="" src="../image209@2x.png" />
      <img className="image-icon210" alt="" src="../image210@2x.png" />
      <img className="image-icon211" alt="" src="../image211@2x.png" />
      <img className="image-icon212" alt="" src="../image212@2x.png" />
      <img className="image-icon213" alt="" src="../image213@2x.png" />
      <div className="rectangle153" />
      <img className="image-icon214" alt="" src="../image214@2x.png" />
      <img className="image-icon215" alt="" src="../image215@2x.png" />
      <img className="image-icon216" alt="" src="../image216@2x.png" />
      <img className="image-icon217" alt="" src="../image217@2x.png" />
      <img className="image-icon218" alt="" src="../image218@2x.png" />
      <img className="image-icon219" alt="" src="../image219@2x.png" />
      <a className="rectangle154" />
      <div className="rectangle155" />
      <img className="image-icon220" alt="" src="../image220@2x.png" />
      <div className="rectangle156" />
      <div className="rectangle157" />
      <div className="rectangle158" />
      <div className="rectangle159" />
      <div className="rectangle160" />
      <div className="rectangle161" />
      <img className="image-icon221" alt="" src="../image221@2x.png" />
      <div className="rectangle162" />
      <div className="rectangle163" />
      <img className="image-icon222" alt="" src="../image222@2x.png" />
      <div className="rectangle164" />
      <div className="rectangle165" />
      <img className="image-icon223" alt="" src="../image223@2x.png" />
      <div className="rectangle166" />
      <div className="rectangle167" />
      <img className="image-icon224" alt="" src="../image224@2x.png" />
      <div className="rectangle168" />
      <div className="rectangle169" />
      <div className="rectangle170" />
      <div className="rectangle170" />
      <img className="image-icon225" alt="" src="../image225@2x.png" />
      <div className="rectangle172" />
      <div className="rectangle173" />
      <img className="image-icon226" alt="" src="../image226@2x.png" />
      <div className="rectangle174" />
      <div className="rectangle175" />
      <img className="image-icon227" alt="" src="../image227@2x.png" />
      <div className="rectangle176" />
      <div className="rectangle177" />
      <div className="rectangle178" />
      <div className="rectangle179" />
      <div className="rectangle180" />
      <img className="image-icon228" alt="" src="../image228@2x.png" />
      <div className="rectangle181" />
      <div className="rectangle182" />
      <div className="rectangle183" />
      <div className="rectangle184" />
      <Link className="image2" to="/sign-in-page" />
      <p className="hello" id="hello">
        Hello
      </p>
      <label className="select-your-address" htmlFor="language">
        Select your address
      </label>
      <div className="all">All</div>
      <button className="en" autoFocus>
        EN
      </button>
      <div className="hello-sign-in" onClick={onHelloSignInClick}>
        Hello, sign in
      </div>
      <button className="account-lists" autoFocus>{`Account & Lists`}</button>
      <a className="returns" href="/return">
        Returns
      </a>
      <div className="orders">{`& Orders`}</div>
      <Link className="sign-in" to="/sign-in-page" onClick={onSignInClick}>
        Sign in
      </Link>
      <strong className="new-customer" id="signin-label">
        New customer?
      </strong>
      <div className="start-here" onClick={onStartHereTextClick}>
        Start here.
      </div>
      <a className="all1">All</a>
      <a className="new-year-sale">New Year Sale</a>
      <a className="gift-cards" onClick={onGiftCardsClick}>
        Gift Cards
      </a>
      <a className="best-sellers" onClick={onBestSellersClick}>
        Best Sellers
      </a>
      <a className="customer-service">Customer Service</a>
      <a className="dove-market-basics">Dove Market Basics</a>
      <a className="prime">Prime</a>
      <a className="new-releases">New Releases</a>
      <a className="books">Books</a>
      <a className="music">Music</a>
      <a className="registry">Registry</a>
      <a className="fashion">Fashion</a>
      <a className="dove-market-home">Dove Market Home</a>
      <a className="toys-games">{`Toys & Games`}</a>
      <a className="pharmacy">Pharmacy</a>
      <a className="coupons">Coupons</a>
      <a className="sell">Sell</a>
      <a className="computers">Computers</a>
      <a className="video-games">Video Games</a>
      <a className="home-improvement">Home Improvement</a>
      <a className="automotive">Automotive</a>
      <a className="beauty-personal-care">{`Beauty & Personal Care`}</a>
      <a className="pet-supplies">Pet Supplies</a>
      <a className="luxury-stores">Luxury Stores</a>
      <a className="health-household">{`Health & Household`}</a>
      <a className="handmade">Handmade</a>
      <a className="audible">Audible</a>
      <a className="kindle-books">Kindle Books</a>
      <a className="tv-video">{`TV & Video`}</a>
      <a className="baby">Baby</a>
      <div className="div65">64</div>
      <div className="div66">:</div>
      <div className="div67">28</div>
      <div className="div68">:</div>
      <div className="the-new-year-sale">The New Year Sale</div>
      <div className="home-kitchen">{`Home & Kitchen`}</div>
      <div className="electronics">Electronics</div>
      <div className="fashion1">Fashion</div>
      <div className="personal-care">Personal Care</div>
      <div className="shop-clearance">Shop clearance</div>
      <div className="the-pre-loved-edit-at-shopbop">
        The pre-loved edit at Shopbop
      </div>
      <div className="see-the-full-edit-from-shopbop">
        See the full edit from Shopbop
      </div>
      <div className="ready-for-winter-plans">Ready for winter-plans</div>
      <div className="outerwear">Outerwear</div>
      <div className="accessories">Accessories</div>
      <div className="denim">Denim</div>
      <div className="activewear">Activewear</div>
      <div className="shop-more-from-premium-brands">
        Shop more from Premium Brands
      </div>
      <div className="sign-in-for-the-best-experienc">
        Sign in for the best experience
      </div>
      <h4 className="sign-in-for-the-best-experienc1" id="signup">
        Sign in for the best experience
      </h4>
      <div className="sign-in-securely" onClick={onSignInSecurelyClick}>
        Sign in securely
      </div>
      <div className="sponsored">Sponsored</div>
      <div className="thursday-7pm-et-cowboys-vs-t">
        Thursday 7PM ET: Cowboys vs. Titans
      </div>
      <div className="add-to-your-watchlist">Add to your watchlist</div>
      <div className="new-year-deals">New Year deals</div>
      <div className="up-to14">Up to</div>
      <div className="div69">57</div>
      <div className="off21">% off</div>
      <div className="ends-in8">Ends in</div>
      <div className="div70">28:20</div>
      <div className="western-digital-drives-sandi">{`Western Digital Drives & SanDisk Memory`}</div>
      <div className="western-digital-drives-sandi1">{`Western Digital Drives & SanDisk Memory`}</div>
      <div className="shop-all-deals">Shop all deals</div>
      <div className="the-warm-weather-edit">The warm-weather edit</div>
      <div className="dresses">Dresses</div>
      <div className="handbags">Handbags</div>
      <div className="sandals">Sandals</div>
      <div className="swimwear">Swimwear</div>
      <div className="shop-dove-market-fashion">Shop Dove Market Fashion</div>
      <div className="try-premium-brands-for-free">
        Try Premium Brands for free
      </div>
      <div className="outerwear1">Outerwear</div>
      <div className="shoes">Shoes</div>
      <div className="accessories1">Accessories</div>
      <div className="sweaters">Sweaters</div>
      <div className="shop-with-prime-try-before-you">
        Shop with Prime Try Before You Buy
      </div>
      <div className="save-big-in-the-new-year-sale">
        Save big in the New Year Sale
      </div>
      <div className="shop-clearance1">Shop clearance</div>
      <div className="best-sellers-in-books">Best Sellers in Books</div>
      <div className="best-sellers-in-cell-phones">{`Best Sellers in Cell Phones & Accessories`}</div>
      <div className="digital-for-the-holidays">Digital for the holidays</div>
      <div className="digital-software">Digital software</div>
      <div className="digital-gaming">Digital gaming</div>
      <div className="kindle-books1">{`Kindle & Books`}</div>
      <div className="digital-gift-cards">Digital gift cards</div>
      <div className="shop-digital-deals-and-more">
        Shop digital deals and more
      </div>
      <div className="the-future-of-fitness-is-yours">
        The future of fitness is yours
      </div>
      <div className="see-more">See more</div>
      <div className="gift-by-age">Gift by age</div>
      <div className="baby-toddler">{`Baby & toddler`}</div>
      <div className="to-5">3 to 5</div>
      <div className="to-8">6 to 8</div>
      <div className="to-11">9 to 11</div>
      <div className="shop-more-toys">Shop more toys</div>
      <div className="frequently-repurchased-in-beau">{`Frequently repurchased in Beauty & Personal Care`}</div>
      <div className="frequently-repurchased-in-beau1">{`Frequently repurchased in Beauty & Personal Care`}</div>
      <div className="burts-bees-lip-balm-stocking">
        Burt's Bees Lip Balm Stocking Stuffers, Moisturizing Lip Care Christmas
        Gifts, 100% Natural, Original Beeswax with...
      </div>
      <div className="div71">$</div>
      <div className="div72">8</div>
      <div className="div73">.</div>
      <div className="div74">30</div>
      <div className="was1">Was:</div>
      <div className="div75">$9.49</div>
      <div className="div76">$9.49</div>
      <div className="trending-deals">Trending deals</div>
      <div className="see-all-deals">See all deals</div>
      <div className="up-to15">Up to</div>
      <div className="div77">60</div>
      <div className="off22">% off</div>
      <div className="ends-in9">Ends in</div>
      <div className="div78">03:22</div>
      <div className="up-to16">Up to</div>
      <div className="div79">45</div>
      <div className="off23">% off</div>
      <div className="ends-in10">Ends in</div>
      <div className="div80">08:22</div>
      <div className="up-to17">Up to</div>
      <div className="div81">35</div>
      <div className="off24">% off</div>
      <div className="ends-in11">Ends in</div>
      <div className="div82">08:22</div>
      <div className="up-to18">Up to</div>
      <div className="div83">56</div>
      <div className="off25">% off</div>
      <div className="up-to19">Up to</div>
      <div className="div84">38</div>
      <div className="off26">% off</div>
      <div className="ends-in12">Ends in</div>
      <div className="div85">08:22</div>
      <div className="up-to20">Up to</div>
      <div className="div86">43</div>
      <div className="off27">% off</div>
      <div className="ends-in13">Ends in</div>
      <div className="best-sellers-in-clothing-shoe">{`Best Sellers in Clothing, Shoes & Jewelry`}</div>
      <div className="sponsored1">Sponsored</div>
      <div className="the-new-year-sale1">The New Year Sale</div>
      <div className="beauty">Beauty</div>
      <div className="sports-outdoors">{`Sports & Outdoors`}</div>
      <div className="home-improvement1">Home Improvement</div>
      <div className="toys-games1">{`Toys & Games`}</div>
      <div className="shop-clearance2">Shop clearance</div>
      <div className="on-the-go-coffee-brewing">On-the-go coffee brewing</div>
      <div className="see-more1">See more</div>
      <div className="everyday-upgrades">Everyday upgrades</div>
      <div className="innovative-products">Innovative products</div>
      <div className="home">Home</div>
      <div className="kitchen">Kitchen</div>
      <div className="health-and-beauty">Health and beauty</div>
      <div className="see-more2">See more</div>
      <div className="everyday-inspiration">Everyday inspiration</div>
      <div className="kitchen1">Kitchen</div>
      <div className="home1">Home</div>
      <div className="pets">Pets</div>
      <div className="beauty-health">{`Beauty & Health`}</div>
      <div className="see-more3">See more</div>
      <div className="best-sellers-in-kitchen-dini">{`Best Sellers in Kitchen & Dining`}</div>
      <div className="best-sellers-in-grocery-gour">{`Best Sellers in Grocery & Gourmet Food`}</div>
      <div className="most-wished-for-in-video-games">
        Most wished for in Video Games
      </div>
      <div className="most-wished-for-in-video-games1">
        Most wished for in Video Games
      </div>
      <div className="logitech-g-cloud-gaming-handhe">
        Logitech G Cloud Gaming Handheld , Portable Gaming Console with
        Long-Battery Life, 1080P 7-Inch Touchscr…
      </div>
      <div className="div87">299.</div>
      <div className="div88">$</div>
      <div className="div89">99</div>
      <div className="list">List:</div>
      <div className="div90">$349.99</div>
      <div className="div91">$349.99</div>
      <div className="deals-on-dove-market-devices">
        Deals on Dove Market Devices
      </div>
      <div className="see-more-deals">See more deals</div>
      <div className="up-to21">Up to</div>
      <div className="div92">29</div>
      <div className="off28">% off</div>
      <div className="deal15">Deal</div>
      <div className="up-to22">Up to</div>
      <div className="div93">20</div>
      <div className="off29">% off</div>
      <div className="deal16">Deal</div>
      <div className="div94">42</div>
      <div className="off30">% off</div>
      <div className="deal17">Deal</div>
      <div className="div95">$349.99</div>
      <div className="list-price4">List Price:</div>
      <div className="div96">$599.99</div>
      <div className="div97">$599.99</div>
      <div className="up-to23">Up to</div>
      <div className="div98">42</div>
      <div className="off31">% off</div>
      <div className="deal18">Deal</div>
      <div className="sponsored2">Sponsored</div>
      <div className="see-personalized-recommendatio">
        See personalized recommendations
      </div>
      <div className="sign-in1">Sign in</div>
      <div className="new-customer1">New customer?</div>
      <a className="start-here1">Start here.</a>
      <a className="dove-market-logos-1" href="/index.html" />
      <button className="material-symbolsadd-shopping-" autoFocus>
        <img className="vector-icon2" alt="" src="../vector2.svg" />
      </button>
      <div className="frame">
        <div className="rectangle185" />
        <div className="rectangle186" />
        <div className="frame1">
          <div className="frame2">
            <div className="all2">All</div>
          </div>
          <img className="image-icon229" alt="" src="../image230@2x.png" />
          <img className="image-icon230" alt="" src="../image231@2x.png" />
          <img className="image-icon231" alt="" src="../image232@2x.png" />
          <div className="english">English</div>
          <div className="united-states">United States</div>
        </div>
        <div className="dove-market-music">Dove Market Music</div>
        <div className="stream-millions">Stream millions</div>
        <div className="of-songs">of songs</div>
        <div className="dove-market-advertising">Dove Market Advertising</div>
        <div className="find-attract-and">Find, attract, and</div>
        <div className="engage-customers">engage customers</div>
        <div className="dove-market-drive">Dove Market Drive</div>
        <div className="cloud-storage">Cloud storage</div>
        <div className="from-dove-market">from Dove Market</div>
        <div className="pm">6pm</div>
        <div className="score-deals">Score deals</div>
        <div className="on-fashion-brands">on fashion brands</div>
        <div className="abebooks">AbeBooks</div>
        <div className="books-art">Books, art</div>
        <div className="collectibles">{`& collectibles`}</div>
        <div className="acx">ACX</div>
        <div className="audiobook-publishing">Audiobook Publishing</div>
        <div className="made-easy">Made Easy</div>
        <div className="sell-on-dove-market">Sell on Dove Market</div>
        <div className="start-a-selling-account">Start a Selling Account</div>
        <div className="dove-market-business">Dove Market Business</div>
        <div className="everything-for">Everything For</div>
        <div className="your-business">Your Business</div>
        <div className="dove-market-fresh">Dove Market Fresh</div>
        <div className="groceries-more">{`Groceries & More`}</div>
        <div className="right-to-your-door">Right To Your Door</div>
        <div className="dove-market-global">Dove Market Global</div>
        <div className="ship-orders">Ship Orders</div>
        <div className="internationally">Internationally</div>
        <div className="home-services">Home Services</div>
        <div className="experienced-pros">Experienced Pros</div>
        <div className="happiness-guarantee">Happiness Guarantee</div>
        <div className="dove-market-ignite">Dove Market Ignite</div>
        <div className="sell-your-original">Sell your original</div>
        <div className="digital-educational">Digital Educational</div>
        <div className="resources">Resources</div>
        <div className="audible1">Audible</div>
        <div className="listen-to-books-original">{`Listen to Books & Original`}</div>
        <div className="audio-performances">Audio Performances</div>
        <div className="book-depository">Book Depository</div>
        <div className="books-with-free">Books With Free</div>
        <div className="delivery-worldwide">Delivery Worldwide</div>
        <div className="box-office-mojo">Box Office Mojo</div>
        <div className="find-movie">Find Movie</div>
        <div className="box-office-data">Box Office Data</div>
        <div className="comixology">ComiXology</div>
        <div className="thousands-of">Thousands of</div>
        <div className="digital-comics">Digital Comics</div>
        <div className="dpreview">DPReview</div>
        <div className="digital">Digital</div>
        <div className="photography">Photography</div>
        <div className="fabric">Fabric</div>
        <div className="sewing-quilting">Sewing, Quilting</div>
        <div className="knitting">{`& Knitting`}</div>
        <div className="goodreads">Goodreads</div>
        <div className="book-reviews">Book reviews</div>
        <div className="recommendations">{`& recommendations`}</div>
        <div className="imdb">IMDb</div>
        <div className="movies-tv">Movies, TV</div>
        <div className="celebrities">{`& Celebrities`}</div>
        <div className="imdbpro">IMDbPro</div>
        <div className="get-info-entertainment">Get Info Entertainment</div>
        <div className="professionals-need">Professionals Need</div>
        <div className="kindle-direct-publishing">Kindle Direct Publishing</div>
        <div className="indie-digital-print-publishi">{`Indie Digital & Print Publishing`}</div>
        <div className="made-easy1">Made Easy</div>
        <div className="dove-market-photos">Dove Market Photos</div>
        <div className="unlimited-photo-storage">Unlimited Photo Storage</div>
        <div className="free-with-prime">Free With Prime</div>
        <div className="prime-video-direct">Prime Video Direct</div>
        <div className="video-distribution">Video Distribution</div>
        <div className="made-easy2">Made Easy</div>
        <div className="shopbop">Shopbop</div>
        <div className="designer">Designer</div>
        <div className="fashion-brands">Fashion Brands</div>
        <div className="dove-market-warehouse">Dove Market Warehouse</div>
        <div className="great-deals-on">Great Deals on</div>
        <div className="quality-used-products">Quality Used Products</div>
        <div className="whole-foods-market">Whole Foods Market</div>
        <div className="americas-healthiest">America’s Healthiest</div>
        <div className="grocery-store">Grocery Store</div>
        <div className="woot">Woot!</div>
        <div className="deals-and">Deals and</div>
        <div className="shenanigans">Shenanigans</div>
        <div className="zappos">Zappos</div>
        <div className="shoes1">{`Shoes &`}</div>
        <div className="clothing">Clothing</div>
        <div className="ring">Ring</div>
        <div className="smart-home">Smart Home</div>
        <div className="security-systems">Security Systems</div>
        <div className="eero-wifi">eero WiFi</div>
        <div className="stream-4k-video">Stream 4K Video</div>
        <div className="in-every-room">in Every Room</div>
        <div className="blink">Blink</div>
        <div className="smart-security">Smart Security</div>
        <div className="for-every-home">for Every Home</div>
        <div className="neighbors-app">Neighbors App</div>
        <div className="real-time-crime">Real-Time Crime</div>
        <div className="safety-alerts">{`& Safety Alerts`}</div>
        <div className="dove-market-subscription-boxes">
          Dove Market Subscription Boxes
        </div>
        <div className="top-subscription-boxes-right">
          Top subscription boxes – right to your door
        </div>
        <div className="rectangle187" />
        <div className="rectangle188" />
        <div className="dove-market-music1">Dove Market Music</div>
        <div className="stream-millions1">Stream millions</div>
        <div className="of-songs1">of songs</div>
        <div className="dove-market-advertising1">Dove Market Advertising</div>
        <div className="find-attract-and1">Find, attract, and</div>
        <div className="engage-customers1">engage customers</div>
        <div className="dove-market-drive1">Dove Market Drive</div>
        <div className="cloud-storage1">Cloud storage</div>
        <div className="from-dove-market1">from Dove Market</div>
        <div className="pm1">6pm</div>
        <div className="score-deals1">Score deals</div>
        <div className="on-fashion-brands1">on fashion brands</div>
        <div className="abebooks1">AbeBooks</div>
        <div className="books-art1">Books, art</div>
        <div className="collectibles1">{`& collectibles`}</div>
        <div className="acx1">ACX</div>
        <div className="audiobook-publishing1">Audiobook Publishing</div>
        <div className="made-easy3">Made Easy</div>
        <div className="sell-on-dove-market1">Sell on Dove Market</div>
        <div className="start-a-selling-account1">Start a Selling Account</div>
        <div className="dove-market-business1">Dove Market Business</div>
        <div className="everything-for1">Everything For</div>
        <div className="your-business1">Your Business</div>
        <div className="dove-market-fresh1">Dove Market Fresh</div>
        <div className="groceries-more1">{`Groceries & More`}</div>
        <div className="right-to-your-door1">Right To Your Door</div>
        <div className="dove-market-global1">Dove Market Global</div>
        <div className="ship-orders1">Ship Orders</div>
        <div className="internationally1">Internationally</div>
        <div className="home-services1">Home Services</div>
        <div className="experienced-pros1">Experienced Pros</div>
        <div className="happiness-guarantee1">Happiness Guarantee</div>
        <div className="dove-market-ignite1">Dove Market Ignite</div>
        <div className="sell-your-original1">Sell your original</div>
        <div className="digital-educational1">Digital Educational</div>
        <div className="resources1">Resources</div>
        <div className="audible2">Audible</div>
        <div className="listen-to-books-original1">{`Listen to Books & Original`}</div>
        <div className="audio-performances1">Audio Performances</div>
        <div className="book-depository1">Book Depository</div>
        <div className="books-with-free1">Books With Free</div>
        <div className="delivery-worldwide1">Delivery Worldwide</div>
        <div className="box-office-mojo1">Box Office Mojo</div>
        <div className="find-movie1">Find Movie</div>
        <div className="box-office-data1">Box Office Data</div>
        <div className="comixology1">ComiXology</div>
        <div className="thousands-of1">Thousands of</div>
        <div className="digital-comics1">Digital Comics</div>
        <div className="dpreview1">DPReview</div>
        <div className="digital1">Digital</div>
        <div className="photography1">Photography</div>
        <div className="fabric1">Fabric</div>
        <div className="sewing-quilting1">Sewing, Quilting</div>
        <div className="knitting1">{`& Knitting`}</div>
        <div className="goodreads1">Goodreads</div>
        <div className="book-reviews1">Book reviews</div>
        <div className="recommendations1">{`& recommendations`}</div>
        <div className="imdb1">IMDb</div>
        <div className="movies-tv1">Movies, TV</div>
        <div className="celebrities1">{`& Celebrities`}</div>
        <div className="imdbpro1">IMDbPro</div>
        <div className="get-info-entertainment1">Get Info Entertainment</div>
        <div className="professionals-need1">Professionals Need</div>
        <div className="kindle-direct-publishing1">
          Kindle Direct Publishing
        </div>
        <div className="indie-digital-print-publishi1">{`Indie Digital & Print Publishing`}</div>
        <div className="made-easy4">Made Easy</div>
        <div className="dove-market-photos1">Dove Market Photos</div>
        <div className="unlimited-photo-storage1">Unlimited Photo Storage</div>
        <div className="free-with-prime1">Free With Prime</div>
        <div className="prime-video-direct1">Prime Video Direct</div>
        <div className="video-distribution1">Video Distribution</div>
        <div className="made-easy5">Made Easy</div>
        <div className="shopbop1">Shopbop</div>
        <div className="designer1">Designer</div>
        <div className="fashion-brands1">Fashion Brands</div>
        <div className="dove-market-warehouse1">Dove Market Warehouse</div>
        <div className="great-deals-on1">Great Deals on</div>
        <div className="quality-used-products1">Quality Used Products</div>
        <div className="whole-foods-market1">Whole Foods Market</div>
        <div className="americas-healthiest1">America’s Healthiest</div>
        <div className="grocery-store1">Grocery Store</div>
        <div className="woot1">Woot!</div>
        <div className="deals-and1">Deals and</div>
        <div className="shenanigans1">Shenanigans</div>
        <div className="zappos1">Zappos</div>
        <div className="shoes2">{`Shoes &`}</div>
        <div className="clothing1">Clothing</div>
        <div className="ring1">Ring</div>
        <div className="smart-home1">Smart Home</div>
        <div className="security-systems1">Security Systems</div>
        <div className="eero-wifi1">eero WiFi</div>
        <div className="stream-4k-video1">Stream 4K Video</div>
        <div className="in-every-room1">in Every Room</div>
        <div className="blink1">Blink</div>
        <div className="smart-security1">Smart Security</div>
        <div className="for-every-home1">for Every Home</div>
        <div className="neighbors-app1">Neighbors App</div>
        <div className="real-time-crime1">Real-Time Crime</div>
        <div className="safety-alerts1">{`& Safety Alerts`}</div>
        <div className="dove-market-subscription-boxes1">
          Dove Market Subscription Boxes
        </div>
        <div className="top-subscription-boxes-right1">
          Top subscription boxes – right to your door
        </div>
        <div className="pillpack">PillPack</div>
        <div className="pharmacy-simplified">Pharmacy Simplified</div>
        <div className="dove-market-renewed">Dove Market - Renewed</div>
        <div className="like-new-products">Like-new products</div>
        <div className="you-can-trust">you can trust</div>
        <div className="rectangle189" />
        <div className="conditions-of-use">Conditions of Use</div>
        <div className="privacy-notice">Privacy Notice</div>
        <div className="interest-based-ads">Interest-Based Ads</div>
        <div className="dove-market-inc">© 2022, Dove Market, Inc.</div>
      </div>
      <div className="frame">
        <div className="rectangle185" />
        <div className="rectangle186" />
        <div className="frame1">
          <div className="frame2">
            <div className="all2">All</div>
            <img className="image-icon232" alt="" src="../image231@2x.png" />
          </div>
          <img className="image-icon233" alt="" src="../image230@2x.png" />
          <img className="image-icon234" alt="" src="../image232@2x.png" />
          <div className="english">English</div>
          <div className="united-states">United States</div>
        </div>
        <div className="dove-market-music">Dove Market Music</div>
        <div className="stream-millions">Stream millions</div>
        <div className="of-songs">of songs</div>
        <div className="dove-market-advertising">Dove Market Advertising</div>
        <div className="find-attract-and">Find, attract, and</div>
        <div className="engage-customers">engage customers</div>
        <div className="dove-market-drive">Dove Market Drive</div>
        <div className="cloud-storage">Cloud storage</div>
        <div className="from-dove-market">from Dove Market</div>
        <div className="pm">6pm</div>
        <div className="score-deals">Score deals</div>
        <div className="on-fashion-brands">on fashion brands</div>
        <div className="abebooks">AbeBooks</div>
        <div className="books-art">Books, art</div>
        <div className="collectibles">{`& collectibles`}</div>
        <div className="acx">ACX</div>
        <div className="audiobook-publishing">Audiobook Publishing</div>
        <div className="made-easy">Made Easy</div>
        <div className="sell-on-dove-market">Sell on Dove Market</div>
        <div className="start-a-selling-account">Start a Selling Account</div>
        <div className="dove-market-business">Dove Market Business</div>
        <div className="everything-for">Everything For</div>
        <div className="your-business">Your Business</div>
        <div className="dove-market-fresh">Dove Market Fresh</div>
        <div className="groceries-more">{`Groceries & More`}</div>
        <div className="right-to-your-door">Right To Your Door</div>
        <div className="dove-market-global">Dove Market Global</div>
        <div className="ship-orders">Ship Orders</div>
        <div className="internationally">Internationally</div>
        <div className="home-services">Home Services</div>
        <div className="experienced-pros">Experienced Pros</div>
        <div className="happiness-guarantee">Happiness Guarantee</div>
        <div className="dove-market-ignite">Dove Market Ignite</div>
        <div className="sell-your-original">Sell your original</div>
        <div className="digital-educational">Digital Educational</div>
        <div className="resources">Resources</div>
        <div className="audible1">Audible</div>
        <div className="listen-to-books-original">{`Listen to Books & Original`}</div>
        <div className="audio-performances">Audio Performances</div>
        <div className="book-depository">Book Depository</div>
        <div className="books-with-free">Books With Free</div>
        <div className="delivery-worldwide">Delivery Worldwide</div>
        <div className="box-office-mojo">Box Office Mojo</div>
        <div className="find-movie">Find Movie</div>
        <div className="box-office-data">Box Office Data</div>
        <div className="comixology">ComiXology</div>
        <div className="thousands-of">Thousands of</div>
        <div className="digital-comics">Digital Comics</div>
        <div className="dpreview">DPReview</div>
        <div className="digital">Digital</div>
        <div className="photography">Photography</div>
        <div className="fabric">Fabric</div>
        <div className="sewing-quilting">Sewing, Quilting</div>
        <div className="knitting">{`& Knitting`}</div>
        <div className="goodreads">Goodreads</div>
        <div className="book-reviews">Book reviews</div>
        <div className="recommendations">{`& recommendations`}</div>
        <div className="imdb">IMDb</div>
        <div className="movies-tv">Movies, TV</div>
        <div className="celebrities">{`& Celebrities`}</div>
        <div className="imdbpro">IMDbPro</div>
        <div className="get-info-entertainment">Get Info Entertainment</div>
        <div className="professionals-need">Professionals Need</div>
        <div className="kindle-direct-publishing">Kindle Direct Publishing</div>
        <div className="indie-digital-print-publishi">{`Indie Digital & Print Publishing`}</div>
        <div className="made-easy1">Made Easy</div>
        <div className="dove-market-photos">Dove Market Photos</div>
        <div className="unlimited-photo-storage">Unlimited Photo Storage</div>
        <div className="free-with-prime">Free With Prime</div>
        <div className="prime-video-direct">Prime Video Direct</div>
        <div className="video-distribution">Video Distribution</div>
        <div className="made-easy2">Made Easy</div>
        <div className="shopbop">Shopbop</div>
        <div className="designer">Designer</div>
        <div className="fashion-brands">Fashion Brands</div>
        <div className="dove-market-warehouse">Dove Market Warehouse</div>
        <div className="great-deals-on">Great Deals on</div>
        <div className="quality-used-products">Quality Used Products</div>
        <div className="whole-foods-market">Whole Foods Market</div>
        <div className="americas-healthiest">America’s Healthiest</div>
        <div className="grocery-store">Grocery Store</div>
        <div className="woot">Woot!</div>
        <div className="deals-and">Deals and</div>
        <div className="shenanigans">Shenanigans</div>
        <div className="zappos">Zappos</div>
        <div className="shoes1">{`Shoes &`}</div>
        <div className="clothing">Clothing</div>
        <div className="ring">Ring</div>
        <div className="smart-home">Smart Home</div>
        <div className="security-systems">Security Systems</div>
        <div className="eero-wifi">eero WiFi</div>
        <div className="stream-4k-video">Stream 4K Video</div>
        <div className="in-every-room">in Every Room</div>
        <div className="blink">Blink</div>
        <div className="smart-security">Smart Security</div>
        <div className="for-every-home">for Every Home</div>
        <div className="neighbors-app">Neighbors App</div>
        <div className="real-time-crime">Real-Time Crime</div>
        <div className="safety-alerts">{`& Safety Alerts`}</div>
        <div className="dove-market-subscription-boxes">
          Dove Market Subscription Boxes
        </div>
        <div className="top-subscription-boxes-right">
          Top subscription boxes – right to your door
        </div>
        <div className="rectangle187" />
        <div className="rectangle188" />
        <div className="dove-market-music1">Dove Market Music</div>
        <div className="stream-millions1">Stream millions</div>
        <div className="of-songs1">of songs</div>
        <div className="dove-market-advertising1">Dove Market Advertising</div>
        <div className="find-attract-and1">Find, attract, and</div>
        <div className="engage-customers1">engage customers</div>
        <div className="dove-market-drive1">Dove Market Drive</div>
        <div className="cloud-storage1">Cloud storage</div>
        <div className="from-dove-market1">from Dove Market</div>
        <div className="pm1">6pm</div>
        <div className="score-deals1">Score deals</div>
        <div className="on-fashion-brands1">on fashion brands</div>
        <div className="abebooks1">AbeBooks</div>
        <div className="books-art1">Books, art</div>
        <div className="collectibles1">{`& collectibles`}</div>
        <div className="acx1">ACX</div>
        <div className="audiobook-publishing1">Audiobook Publishing</div>
        <div className="made-easy3">Made Easy</div>
        <div className="sell-on-dove-market1">Sell on Dove Market</div>
        <div className="start-a-selling-account1">Start a Selling Account</div>
        <div className="dove-market-business1">Dove Market Business</div>
        <div className="everything-for1">Everything For</div>
        <div className="your-business1">Your Business</div>
        <div className="dove-market-fresh1">Dove Market Fresh</div>
        <div className="groceries-more1">{`Groceries & More`}</div>
        <div className="right-to-your-door1">Right To Your Door</div>
        <div className="dove-market-global1">Dove Market Global</div>
        <div className="ship-orders1">Ship Orders</div>
        <div className="internationally1">Internationally</div>
        <div className="home-services1">Home Services</div>
        <div className="experienced-pros1">Experienced Pros</div>
        <div className="happiness-guarantee1">Happiness Guarantee</div>
        <div className="dove-market-ignite1">Dove Market Ignite</div>
        <div className="sell-your-original1">Sell your original</div>
        <div className="digital-educational1">Digital Educational</div>
        <div className="resources1">Resources</div>
        <div className="audible2">Audible</div>
        <div className="listen-to-books-original1">{`Listen to Books & Original`}</div>
        <div className="audio-performances1">Audio Performances</div>
        <div className="book-depository1">Book Depository</div>
        <div className="books-with-free1">Books With Free</div>
        <div className="delivery-worldwide1">Delivery Worldwide</div>
        <div className="box-office-mojo1">Box Office Mojo</div>
        <div className="find-movie1">Find Movie</div>
        <div className="box-office-data1">Box Office Data</div>
        <div className="comixology1">ComiXology</div>
        <div className="thousands-of1">Thousands of</div>
        <div className="digital-comics1">Digital Comics</div>
        <div className="dpreview1">DPReview</div>
        <div className="digital1">Digital</div>
        <div className="photography1">Photography</div>
        <div className="fabric1">Fabric</div>
        <div className="sewing-quilting1">Sewing, Quilting</div>
        <div className="knitting1">{`& Knitting`}</div>
        <div className="goodreads1">Goodreads</div>
        <div className="book-reviews1">Book reviews</div>
        <div className="recommendations1">{`& recommendations`}</div>
        <div className="imdb1">IMDb</div>
        <div className="movies-tv1">Movies, TV</div>
        <div className="celebrities1">{`& Celebrities`}</div>
        <div className="imdbpro1">IMDbPro</div>
        <div className="get-info-entertainment1">Get Info Entertainment</div>
        <div className="professionals-need1">Professionals Need</div>
        <div className="kindle-direct-publishing1">
          Kindle Direct Publishing
        </div>
        <div className="indie-digital-print-publishi1">{`Indie Digital & Print Publishing`}</div>
        <div className="made-easy4">Made Easy</div>
        <div className="dove-market-photos1">Dove Market Photos</div>
        <div className="unlimited-photo-storage1">Unlimited Photo Storage</div>
        <div className="free-with-prime1">Free With Prime</div>
        <div className="prime-video-direct1">Prime Video Direct</div>
        <div className="video-distribution1">Video Distribution</div>
        <div className="made-easy5">Made Easy</div>
        <div className="shopbop1">Shopbop</div>
        <div className="designer1">Designer</div>
        <div className="fashion-brands1">Fashion Brands</div>
        <div className="dove-market-warehouse1">Dove Market Warehouse</div>
        <div className="great-deals-on1">Great Deals on</div>
        <div className="quality-used-products1">Quality Used Products</div>
        <div className="whole-foods-market1">Whole Foods Market</div>
        <div className="americas-healthiest1">America’s Healthiest</div>
        <div className="grocery-store1">Grocery Store</div>
        <div className="woot1">Woot!</div>
        <div className="deals-and1">Deals and</div>
        <div className="shenanigans1">Shenanigans</div>
        <div className="zappos1">Zappos</div>
        <div className="shoes2">{`Shoes &`}</div>
        <div className="clothing1">Clothing</div>
        <div className="ring1">Ring</div>
        <div className="smart-home1">Smart Home</div>
        <div className="security-systems1">Security Systems</div>
        <div className="eero-wifi1">eero WiFi</div>
        <div className="stream-4k-video1">Stream 4K Video</div>
        <div className="in-every-room1">in Every Room</div>
        <div className="blink1">Blink</div>
        <div className="smart-security1">Smart Security</div>
        <div className="for-every-home1">for Every Home</div>
        <div className="neighbors-app1">Neighbors App</div>
        <div className="real-time-crime1">Real-Time Crime</div>
        <div className="safety-alerts1">{`& Safety Alerts`}</div>
        <div className="dove-market-subscription-boxes1">
          Dove Market Subscription Boxes
        </div>
        <div className="top-subscription-boxes-right1">
          Top subscription boxes – right to your door
        </div>
        <div className="pillpack">PillPack</div>
        <div className="pharmacy-simplified">Pharmacy Simplified</div>
        <div className="dove-market-renewed">Dove Market - Renewed</div>
        <div className="like-new-products">Like-new products</div>
        <div className="you-can-trust">you can trust</div>
        <div className="rectangle189" />
        <div className="conditions-of-use1">Conditions of Use</div>
        <div className="privacy-notice1">Privacy Notice</div>
        <div className="interest-based-ads1">Interest-Based Ads</div>
        <a className="dove-market-inc1">© 2022, Dove Market, Inc.</a>
      </div>
      <button className="frame5" autoFocus data-animate-on-scroll>
        <div className="rectangle195" />
        <button className="back-to-top" autoFocus data-animate-on-scroll>
          Back to top
        </button>
      </button>
      <Form.Check className="checkboxcheckbox-label" label="Checkbox" inline />
      <button className="rectangle196" />
      <button className="rectangle197" />
      <button className="rectangle198" />
      <button className="icon-chevron-left" autoFocus>
        <img className="vector-icon3" alt="" src="../vector3.svg" />
      </button>
      <button className="icon-chevron-left1" autoFocus>
        <img className="vector-icon3" alt="" src="../vector3.svg" />
      </button>
      <button className="rectangle199" />
      <button className="icon-chevron-right1" autoFocus>
        <img className="vector-icon1" alt="" src="../vector1.svg" />
      </button>
      <button className="rectangle200" />
      <button className="icon-chevron-right2" autoFocus>
        <img className="vector-icon1" alt="" src="../vector1.svg" />
      </button>
      <button className="rectangle201" />
      <button className="icon-chevron-left2" autoFocus>
        <img className="vector-icon3" alt="" src="../vector3.svg" />
      </button>
      <button className="rectangle202" />
      <button className="icon-chevron-left3">
        <img className="vector-icon3" alt="" src="../vector3.svg" />
      </button>
      <button className="rectangle203" />
      <button className="icon-chevron-right3" autoFocus>
        <img className="vector-icon1" alt="" src="../vector9.svg" />
      </button>
      <button className="rectangle204" />
      <button className="icon-chevron-right4" autoFocus>
        <img className="vector-icon1" alt="" src="../vector9.svg" />
      </button>
      <button className="rectangle205" />
      <button className="icon-chevron-left4">
        <img className="vector-icon3" alt="" src="../vector3.svg" />
      </button>
    </div>
  );
};

export default Landing;
