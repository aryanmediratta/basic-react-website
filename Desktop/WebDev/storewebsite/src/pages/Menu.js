import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

import menu2 from '../images/menu2.jpeg';
import menu1 from '../images/menu1.jpeg';

import M from 'materialize-css/dist/js/materialize.min.js';


const stylo = {
	width : '100%',
	height : '50%',
}

const h2s = {
	textAlign : 'center',
	fontFamily : 'Times',
	fontWeight : 'bold'
}

const ths = {
	fontFamily : 'Times',
	fontWeight : 'bold',
	fontSize : '18px'
}


class Menu extends Component {

	componentDidMount(){

		document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

	}


	render(){
		return(
			<div>
			<Header/>
			<div class = 'container'>
			<h2 style = {h2s}> Our Delicate Menu </h2>
			</div>
				<div class="row">
				<div class="col s6">
				<table class="centred">
					<tr>
						<td></td>
						<td style = {ths}>KAROL BAGH KI CHAT-STARTER</td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td>PANI PURI (6PC)</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>2</td>
						<td>DAHI PURI(5PC)</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>3</td>
						<td>SPECIAL DAHI BHALLA(2PC)</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>4</td>
						<td>BHEL PURI</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>5</td>
						<td>SAMOSA(2PC)</td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>6</td>
						<td>SAMOSA CHANA CHAT</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>7</td>
						<td>KACHORI(2PC)</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>8</td>
						<td>KACHORI CHAT</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>9</td>
						<td>RAJ KACHORI</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>10</td>
						<td>RAGDA PATTIES</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>11</td>
						<td>PANEER SAMOSA DELHI GRILL SPECIAL(1PC)</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>12</td>
						<td>CHICKEN SAMOSA(1PC)</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>13</td>
						<td>MUTTON SAMOSA(1PC)</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>14</td>
						<td>HARA BHARA KABAB</td>
						<td>10.99</td>
					</tr>
					<tr>
						<td>15</td>
						<td>DAHI KE SHOLE</td>
						<td>11.99</td>
					</tr>
					<tr>
						<td>16</td>
						<td>CHOLA BHATURA(2PC)</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>17</td>
						<td>VADA PAV</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>18</td>
						<td>PANEER PAKODA</td>
						<td>11.99</td>
					</tr>
					<tr>
						<td>19</td>
						<td>MIX PAKODA</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>20</td>
						<td>ONION PAKODA</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>21</td>
						<td>DELHI GRILL SPECIAL GOBHI PAKODA</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>22</td>
						<td>MIRCHI VADA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>23</td>
						<td>BASKET CHAT</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>24</td>
						<td>PAPDI CHAT</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>25</td>
						<td>PALAK KI CHAAT-DELHI GRILL SPECIAL INDIAN PALAK</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>26</td>
						<td>ALOO CHAT</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>27</td>
						<td>TIKKI CHAT</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>28</td>
						<td>PAV BHAJI</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>29</td>
						<td>DABELI</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>30</td>
						<td>MATAR KULCHA</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>31</td>
						<td>PANEER KATHI ROLL</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>32</td>
						<td>ALOO KATHI ROLL</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>33</td>
						<td>FALAFEL ROLL</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>34</td>
						<td>KHAMAN DHOKLA(2PC)</td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>35</td>
						<td>BREAD PAKODA</td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>36</td>
						<td>FISH PAKODA</td>
						<td>10.99</td>
					</tr>
					<tr>
						<td>37</td>
						<td>FISH FRY</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>38</td>
						<td>POORI ALU SET(2PC)</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>39</td>
						<td>TAMARIND RICE PULLIOGARE </td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>40</td>
						<td>CURD RICE</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>41</td>
						<td>LEMON RICE</td>
						<td>6.99</td>
					</tr>
					</table>
					</div>









					<div class="col s6">
					<table class = "centred">
					<tr>
						<td></td>
						<td style = {ths}>GALI PARATHE WALI KE PARATHE NAN, ROTI & WRAP</td>
						<td></td>
					</tr>
					<tr>
						<td>42</td>
						<td>YOGURT(BOWL) </td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>43</td>
						<td>CHAPATI </td>
						<td>1.99</td>
					</tr>
					<tr>
						<td>44</td>
						<td>MAKKI ROTI</td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>45</td>
						<td>PLAIN PARATHA </td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>46</td>
						<td>BUTTER PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>47</td>
						<td>JEERA PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>48</td>
						<td>AJWAIN PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>49</td>
						<td>METHI PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>50</td>
						<td>CHILLY PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>51</td>
						<td>ALU PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>52</td>
						<td>GOBHI PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>53</td>
						<td>ONION PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>54</td>
						<td>MULI PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>55</td>
						<td>PANEER PARATHA </td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>56</td>
						<td>PUDINA PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>57</td>
						<td>TANDOORI LACHHA PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>58</td>
						<td>TANDOORI ALU PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>59</td>
						<td>TANDOORI JEERA PARATHA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>60</td>
						<td>PLAIN NAN</td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>61</td>
						<td>BUTTER NAN</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>62</td>
						<td>GARLIC NAN</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>63</td>
						<td>CHEESE NAN</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>64</td>
						<td>GARLIC CHEESE NAN</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>65</td>
						<td>KASHMIRI NAN</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>66</td>
						<td>TANDOORI ROTI</td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>67</td>
						<td>TANDOORI BUTTER ROTI</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>68</td>
						<td>MISSI ROTI</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>69</td>
						<td>AMRITSARI KULCHA</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>70</td>
						<td>MIX VEG KULCHA</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>71</td>
						<td>ALU KULCHA </td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>72</td>
						<td>PANEER KULCHA</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>73</td>
						<td>CHICKEN KULCHA </td>
						<td>9.99</td>
					</tr>
					<tr>
						<td>74</td>
						<td>MUTTON KULCHA</td>
						<td>10.99</td>
					</tr>
					<tr>
						<td>75</td>
						<td>PANEER WRAP</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>76</td>
						<td>ALOO WRAP</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>77</td>
						<td>FALAFEL WRAP</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>78</td>
						<td>PANEER TIKKA RWRAP</td>
						<td>9.99</td>
					</tr>
					<tr>
						<td>79</td>
						<td>CHICKEN TIKKA WRAP</td>
						<td>10.99</td>
					</tr>
					<tr>
						<td>80</td>
						<td>SEEKH KABAB WRAP</td>
						<td>11.99</td>
					</tr>
					</table>
					</div>
					</div>









					<div class="row">
				<div class="col s6">
					<table class ="centred">
					<tr>
						<td></td>
						<td style = {ths}>DELHI GRILL TANDOORI SPECIAL</td>
						<td></td>
					</tr>
					<tr>
						<td>81</td>
						<td>VEG SEEKH KABAB </td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>82</td>
						<td>TANDOORI GOBHI </td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>83</td>
						<td>MUSHROOM TIKKA</td>
						<td>16.99</td>
					</tr>
					<tr>
						<td>84</td>
						<td>PANEER TIKKA </td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>85</td>
						<td>PANEER GARLIC TIKKA </td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>86</td>
						<td>PANEER METHI TIKKA</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>87</td>
						<td>TANDOORI CHICKEN</td>
						<td>13.99</td>
					</tr>
					<tr>
						<td>88</td>
						<td>CHICKEN TIKKA</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>89</td>
						<td>CHICKEN MALAI TIKKA</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>90</td>
						<td>CHICKEN AFGANI TIKKA</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>91</td>
						<td>CHICKEN ACHARI TIKKA</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>92</td>
						<td>CHICKEN GREEN CHILLY KABAB </td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>93</td>
						<td>CHICKEN SEEKH KABAB </td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>94</td>
						<td>DELHI TANGDI KABAB</td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>95</td>
						<td>MUTTON SEEKH KABAB</td>
						<td>22.99</td>
					</tr>
					<tr>
						<td>96</td>
						<td>MUTTON RESHMI KABAB</td>
						<td>22.99</td>
					</tr>
					
					</table>
					</div>










					<div class="col s6">
					<table class = "centred">
				
					<tr>
						<td></td>
						<td style = {ths}>SNACKS SOUTH DELHI</td>
						<td></td>
					</tr>
					<tr>
						<td>97</td>
						<td>VEG GRILL SANDWICH WITH CHIPS</td>
						<td>10.99</td>
					</tr>
					<tr>
						<td>98</td>
						<td>EGG GRILL SANDWICH</td>
						<td>11.99</td>
					</tr>
					<tr>
						<td>99</td>
						<td>CHICKEN GRILL SANDWICH</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>100</td>
						<td>NACHOS </td>
						<td>9.99</td>
					</tr>
					<tr>
						<td>101</td>
						<td>CHEESE PIZZA</td>
						<td>9.99</td>
					</tr>
					<tr>
						<td>102</td>
						<td>BURGER WITH CHIPS</td>
						<td>9.99</td>
					</tr>
					<tr>
						<td>103</td>
						<td>PASTA</td>
						<td>11.99</td>
					</tr>
					<tr>
						<td>104</td>
						<td>CUTLET-2PC</td>
						<td>11.99</td>
					</tr>
					<tr>
						<td></td>
						<td>PANEER MAHIPALPUR(ALA-CARTE)</td>
						<td></td>
					</tr>
					<tr>
						<td>119</td>
						<td>MALAI KOFTA</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>120</td>
						<td>PANEER TIKKA LABABDAR</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>121</td>
						<td>KADAI PANEER</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>122</td>
						<td>PANEER BUTTER MASALA</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>123</td>
						<td>SHAHI PANEER</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>124</td>
						<td>PALAK PANEER</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>125</td>
						<td>PANEER 65</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>126</td>
						<td>MATAR PANEER</td>
						<td>17.99</td>
					</tr>
					</table>
					</div>
					</div>








			<div class="row">
				<div class="col s6">

					<table class = "centred">
					<tr>
						<td></td>
						<td style = {ths}>DESI CHINESE DELHI SE(ALA -CARTE)</td>
						<td></td>
					</tr>
					<tr>
						<td>105</td>
						<td>DRY MUNCHURIAN</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>106</td>
						<td>GOBHI MANCHURIAN</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>107</td>
						<td>VEG SPRING ROLL </td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>108</td>
						<td>CHILLY MUSHROOM</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>109</td>
						<td>CHILLY PANEER</td>
						<td>14.99</td>
					</tr>
					<tr>
						<td>110</td>
						<td>CHILLY CHICKEN</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>111</td>
						<td>VEG HAKA NOODLES</td>
						<td>11.99</td>
					</tr>
					<tr>
						<td>112</td>
						<td>SCHEZWAN FRIED NOODLES</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>113</td>
						<td>CHICKEN HAKA NOODLES</td>
						<td>13.99</td>
					</tr>
					<tr>
						<td>114</td>
						<td>VEG FRIED RICE </td>
						<td>11.99</td>
					</tr>
					<tr>
						<td>115</td>
						<td>SCHEZWAN VEG FRIED RICE</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>116</td>
						<td>CHICKEN FRIED RICE </td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>117</td>
						<td>SCHEZWAN CHICKEN FRIED RICE </td>
						<td>13.99</td>
					</tr>
					<tr>
						<td>118</td>
						<td>EGG FRIED RICE</td>
						<td>11.99</td>
					</tr>
					</table>
					</div>











				<div class="col s6">

					<table class = "centred">
					<tr>
						<td></td>
						<td style = {ths}>SABZIYAN AZADPUR SABZI MANDI SE</td>
						<td></td>
					</tr>
					<tr>
						<td>127</td>
						<td>BHINDI DO PYAZA</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>128</td>
						<td>DUM ALU</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>129</td>
						<td>MASALA ALU GOBHI </td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>130</td>
						<td>MUSHROOM MATAR</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>131</td>
						<td>CHILLY MUSHROOM </td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>132</td>
						<td>EXOTIC MIXED VEGETABLE</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>133</td>
						<td>METHI ALU </td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>134</td>
						<td>ALOO MATAR MASALA </td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>135</td>
						<td>NAVRATAN KORMA</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>136</td>
						<td>KADI PAKODA</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>137</td>
						<td>METHI MATAR MALAI</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>138</td>
						<td>KASHMIRI ALU </td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>139</td>
						<td>CHILLY ALU</td>
						<td>15.99</td>
					</tr>

					</table>
					</div>
					</div>






			<div class="row">
				<div class="col s6">

					<table class = "centred">

					<tr>
						<td></td>
						<td style = {ths}>DAL KHARI BAWLI</td>
						<td></td>
					</tr>
					<tr>
						<td>140</td>
						<td>DAL MAKHANI </td>
						<td>14.99</td>
					</tr>
					<tr>
						<td>141</td>
						<td>DAL PACHRANGI</td>
						<td>14.99</td>
					</tr>
					<tr>
						<td>142</td>
						<td>DAL TADKA</td>
						<td>14.99</td>
					</tr>
					<tr>
						<td>143</td>
						<td>RASILA CHITRA RAJMA</td>
						<td>14.99</td>
					</tr>
					<tr>
						<td>144</td>
						<td>PINDI CHANA </td>
						<td>14.99</td>
					</tr>










					<tr>
						<td></td>
						<td style = {ths}>MUTTON JAMA MASJID</td>
						<td></td>
					</tr>
					<tr>
						<td>145</td>
						<td>MUTTON MAKHANI</td>
						<td>21.99</td>
					</tr>
					<tr>
						<td>146</td>
						<td>MUTTON HANDI</td>
						<td>21.99</td>
					</tr>
					<tr>
						<td>147</td>
						<td>SUKHA BHUNA MUTTON</td>
						<td>21.99</td>
					</tr>
					<tr>
						<td>148</td>
						<td>DAHI MUTTON</td>
						<td>21.99</td>
					</tr>
					<tr>
						<td>149</td>
						<td>PALAK GOSHT</td>
						<td>21.99</td>
					</tr>

















					<tr>
						<td></td>
						<td style = {ths}>CHICKEN CHANDNI CHOWK</td>
						<td></td>
					</tr>
					<tr>
						<td>150</td>
						<td>BUTTER CHICKEN </td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>151</td>
						<td>CHICKEN TIKKA MASALA </td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>152</td>
						<td>MASALA CHICKEN </td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>153</td>
						<td>CHICKEN PALAK </td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>154</td>
						<td>CHICKEN KADAI </td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>155</td>
						<td>BLACK PEPPER CHICKEN </td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>156</td>
						<td>MALAI CHICKEN</td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>157</td>
						<td>CHICKEN RAHRA</td>
						<td>18.99</td>
					</tr>
					<tr>
						<td>158</td>
						<td>CHICHEN CHETINAD</td>
						<td>18.99</td>
					</tr>

					</table>
					</div>







				<div class="col s6">

					<table class ="centred">
					<tr>

						<td></td>
						<td style = {ths}>EGG (ALA-CARTE)</td>
						<td></td>
					</tr>
					<tr>
						<td>159</td>
						<td>EGG CURRY</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>160</td>
						<td>EGG BHURJI</td>
						<td>12.99</td>
					</tr>
					<tr>











						<td></td>
						<td style = {ths}>BIRYANI, RICE & PULAV</td>
						<td></td>
					</tr>
					<tr>
						<td>161</td>
						<td>SAFFRON VEG BIRYANI(SERVED WITH YOGURT)</td>
						<td>12.99</td>
					</tr>
					<tr>
						<td>162</td>
						<td>CHICKEN BIRYANI (SERVED WITH YOGURT)</td>
						<td>15.99</td>
					</tr>
					<tr>
						<td>163</td>
						<td>MUTTON BIRYANI (SERVED WITH YOGURT)</td>
						<td>17.99</td>
					</tr>
					<tr>
						<td>164</td>
						<td>PLAIN BASMATI RICE</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>165</td>
						<td>JEERA BASMATI RICE</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>166</td>
						<td>PEAS PULAV</td>
						<td>8.99</td>
					</tr>













					<tr>
						<td></td>
						<td style = {ths}>RAITA, SALAD & PAPAD</td>
						<td></td>
					</tr>
					<tr>
						<td>167</td>
						<td>GARDEN SALAD</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>168</td>
						<td>CHICK PEAS SALAD</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>169</td>
						<td>MAYONESE SALAD</td>
						<td>11.99</td>
					</tr>
					<tr>
						<td>170</td>
						<td>BOONDI RAITA-SMALL</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>171</td>
						<td>BOONDI RAITA-BIG</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>172</td>
						<td>CUCUMBER RAITA-SMALL</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>173</td>
						<td>CUCUMBER RAITA-BIG</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>174</td>
						<td>PLAIN PAPAD</td>
						<td>3.99</td>
					</tr>
					<tr>
						<td>175</td>
						<td>MASALA PAPAD</td>
						<td>4.99</td>
					</tr>

					</table>
					</div>
					</div>







					<div class="row">
				<div class="col s6">

					<table class = "centred">

					<tr>

						<td></td>
						<td style = {ths}>DRINKS- LASSI</td>
						<td></td>
					</tr>
					<tr>
						<td>176</td>
						<td>PALIN SALTED/SWEET</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>177</td>
						<td>MINT MASALA LASSI</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>178</td>
						<td>MANGO LASSI</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td></td>
						<td style = {ths}>MILKSHAKES</td>
						<td></td>
					</tr>
					<tr>
						<td>179</td>
						<td>MANGO,CHOCOLATE ,STRAWBERRY,VANILLA WITH ICE CREAM</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>180</td>
						<td>ORIO MILKSHAKE</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>181</td>
						<td>MILK BADAM</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>182</td>
						<td>COLD COFFEE WITH ICE CREAM</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>183</td>
						<td>THANDAI</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td></td>
						<td style = {ths}>MOCKTAILS</td>
						<td></td>
					</tr>
					<tr>
						<td>184</td>
						<td>PINA COLADA</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>185</td>
						<td>MOJITO</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td>186</td>
						<td>PEACHY PASION</td>
						<td>8.99</td>
					</tr>
					<tr>
						<td></td>
						<td style = {ths}>FRESH JUICE</td>
						<td></td>
					</tr>
					<tr>
						<td>187</td>
						<td>WATERMELON </td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>188</td>
						<td>ORANGE</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>189</td>
						<td>PINEAPPLE </td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>190</td>
						<td>GUAVA JUICE</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>191</td>
						<td>AAM PANA</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>192</td>
						<td>CARROT APPLE </td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>193</td>
						<td>APPLE ZAPPLE/GREEN APPLE</td>
						<td>6.99</td>
					</tr>
					</table>
					</div>

				<div class="col s6">

					<table class = "centred">
					<tr>
						<td></td>
						<td style = {ths}>SOFT DRINKS</td>
						<td></td>
					</tr>
					<tr>
						<td>194</td>
						<td>JALJEERA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>195</td>
						<td>JALJEERA SODA</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>196</td>
						<td>FRESH LIME JUICE</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>197</td>
						<td>FRESH LIME SODA</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>198</td>
						<td>FRESH LIME MINT</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>199</td>
						<td>ICE LEMON TEA</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>200</td>
						<td>ICE MILO</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td></td>
						<td>COLD COFFEE WITH ICE CREAM</td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td>BADAM MILK </td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td>HOT DRINKS</td>
						<td></td>
					</tr>
					<tr>
						<td>201</td>
						<td>MASALA CHAI</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>202</td>
						<td>ADRAK CHAI</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>203</td>
						<td>ELAICHI CHAI</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>204</td>
						<td>BRU COFFEE/NESCAFE</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>205</td>
						<td>MASALA MILK</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>206</td>
						<td>GREEN TEA</td>
						<td>3.99</td>
					</tr>


					</table>
					</div>
					</div>








					<table class = "centred">


					<tr>
						<td></td>
						<td style = {ths}>MEETHA CONNAUGHT PLACE KA</td>
						<td></td>
					</tr>
					<tr>
						<td>207</td>
						<td>ASSORTED SWEETS(KG)</td>
						<td>59.99</td>
					</tr>
					<tr>
						<td>208</td>
						<td>KAJU BURFI(KG)</td>
						<td>79.99</td>
					</tr>
					<tr>
						<td>209</td>
						<td>LADOO/JALEBI(KG)</td>
						<td>34.99</td>
					</tr>
					<tr>
						<td>210</td>
						<td>RASMALAI</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>211</td>
						<td>GULAB JAMUN</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>212</td>
						<td>LADOO</td>
						<td>1.99</td>
					</tr>
					<tr>
						<td>213</td>
						<td>JALEBI</td>
						<td>4.99</td>
					</tr>
					<tr>
						<td>214</td>
						<td>BARFI</td>
						<td>1.99</td>
					</tr>
					<tr>
						<td>215</td>
						<td>MUNG DAL HALWA</td>
						<td>7.99</td>
					</tr>
					<tr>
						<td>216</td>
						<td>GAJAR HALWA</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>217</td>
						<td>RASGULLA</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>218</td>
						<td>CHAMCHAM</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>219</td>
						<td>SHAKARPARE(100GM)</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>220</td>
						<td>MATHIAN (100GM)</td>
						<td>2.99</td>
					</tr>
					<tr>
						<td>221</td>
						<td>KESAR PISTA MATKA KULFI</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>222</td>
						<td>ICE CREAM( CHOCOLATE/VANILLA/STRAWBERRY/MANGO)</td>
						<td>5.99</td>
					</tr>
					<tr>
						<td>223</td>
						<td>KULFI FALUDA</td>
						<td>6.99</td>
					</tr>
					<tr>
						<td>224</td>
						<td>STICK KULFI</td>
						<td>4.99</td>
					</tr>
				</table>
					
						<table >
							<tr>
								<td></td>
								<td style = {ths}>SET MENU THALI</td>
								<td></td>
							</tr>
							<tr>
								<td>1</td>
								<td>NAAN/CHAPATI,JEERA ALU, DAL,VEG OF THE DAY,RICE, RAITA & SALAD</td>
								<td>10</td>
							</tr>
							<tr>
								<td>2</td>
								<td>NAAN/CHAPATI,PANEER, DAL,VEG OF THE DAY,RICE, RAITA & SALAD</td>
								<td>12</td>
							</tr>
							<tr>
								<td>3</td>
								<td>NAAN/CHAPATI, CHICKEN CURRY, VEG OF THE DAY, ALOO & SALAD)</td>
								<td>12</td>
							</tr>
							<tr>
								<td>4</td>
								<td>CHICKEN BIRYANI SET( CHICKEN BIRYANI, RAITA, SALAD)</td>
								<td>12</td>
							</tr>
							<tr>
								<td>5</td>
								<td>CHICKEN FRIED RICE, CHICKEN HAKA NOODLES, CHILLY CHICKEN SET</td>
								<td>14</td>
							</tr>
							<tr>
								<td>6</td>
								<td>MUTTON BIRYANI SET( MUTTON BIRYANI, RAITA, SALAD)</td>
								<td>14</td>
							</tr>
							<tr>
								<td>7</td>
								<td>MAKKI KI ROTI SARSOAN KA SAAG, LASSI & SALAD</td>
								<td>14</td>
							</tr>
							<tr>
								<td>8</td>
								<td>KADI PAKODA, JEERA RICE, LASSI & SALAD</td>
								<td>12</td>
							</tr>
							<tr>
								<td>9</td>
								<td>VEG FRIED RICE,SPRING ROLL, MANCHURIAN SET</td>
								<td>12</td>
							</tr>
							<tr>
								<td>10</td>
								<td>VEG HAKA NOODLES,SPRING ROLL,MANCHURIAN SET</td>
								<td>12</td>
							</tr>
							<tr>
								<td>11</td>
								<td>VEG FRIED RICE,SPRING ROLL, CHILLY PANEER SET</td>
								<td>14</td>
							</tr>
							<tr>
								<td>12</td>
								<td>VEG HAKA NOODLES,SPRING ROLL,CHILLY PANEER SET</td>
								<td>14</td>
							</tr>
							<tr>
								<td>13</td>
								<td>AMERICAN CHOPSUEY (VEG), SPRING ROLL</td>
								<td>12</td>
							</tr>
							<tr>
								<td>14</td>
								<td>AMERICAN CHOPSUEY (CHICHEN), SPRING ROLL</td>
								<td>14</td>
							</tr>
							<tr>
								<td></td>
								<td>PARATHA SET</td>
								<td></td>
							</tr>
							<tr>
								<td>15</td>
								<td>ALOO PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>7.9</td>
							</tr>
							<tr>
								<td>16</td>
								<td>GOBHI PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>7.9</td>
							</tr>
							<tr>
								<td>17</td>
								<td>MULI PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>7.9</td>
							</tr>
							<tr>
								<td>18</td>
								<td>MIX VEG PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>7.9</td>
							</tr>
							<tr>
								<td>19</td>
								<td>PANEER PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>9.9</td>
							</tr>
							<tr>
								<td>20</td>
								<td>EGG PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>9.9</td>
							</tr>
							<tr>
								<td>21</td>
								<td>PLAIN PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>6.9</td>
							</tr>
							<tr>
								<td>22</td>
								<td>CHICKEN KEEMA PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>12.9</td>
							</tr>
							<tr>
								<td>23</td>
								<td>MUTTON KEEMA PARATHA SET( 2 PC SERVED WITH YOGURT & PICKLE)</td>
								<td>14.9</td>
							</tr>
						</table>
			<Footer/>
			</div>
			)
	}
}

export default Menu;