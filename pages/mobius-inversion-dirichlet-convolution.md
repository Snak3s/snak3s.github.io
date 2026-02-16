莫比乌斯反演与狄利克雷卷积。

#### 前置技能

##### 一些符号

$(a,b)$：$a$与$b$的最大公因数，即$\gcd(a,b)$

$a|b$：$a$整除$b$，即$a$为$b$因子

$\mathbb{P}$：质数集合

$\omega(n)$：$n$的不同质因子个数，特别地，$\omega(1)=0$

$\nu_p(n)$：$n$质因数分解后质数$p$的幂次，即满足$p^\alpha|n$的$\alpha$的最大值

$\Omega(n)$：$n$质因数分解后所有质数幂次之和，即$\sum_p\nu_p(n)$

$C_n^k$：$n$个不同元素选取$k$种元素的不同**组合**数目，特别地，在本篇文章中，我们认为对于满足$k<0$或$k>n$的整数$k$，$C_n^k=0$

$[P]$：若命题$P$成立，则$[P]=1$，否则$[P]=0$

##### 一些定义

**数论函数（Arithmetic function）**：定义域为全体正整数，值域为复数域子集的一类函数

**积性函数（Multiplicative function）**：对于任意正整数$a,b$，当$(a,b)=1$时，满足$f(ab)=f(a)f(b)$的一类数论函数

**完全积性函数（Completely multiplicative function）**：对于任意正整数$a,b$，满足$f(ab)=f(a)f(b)$的一类数论函数

#### 莫比乌斯函数（Möbius function）

莫比乌斯函数是众多数论函数之一，其定义如下：

$$\mu(n)=\begin{cases}(-1)^{\omega(n)}&,\not\exists p\in\mathbb{P},p^2|n\\\\0&,\exists p\in\mathbb{P},p^2|n\end{cases}$$

根据定义式，我们可以发现，莫比乌斯函数是一个积性函数。至于为什么不是一个完全积性函数，反例非常显然。

莫比乌斯函数有以下特殊性质：

$$\sum_{d|n}\mu(d)=\begin{cases}1&,n=1\\\\0&,n>1\end{cases}$$

或者可以写成：

$$\sum_{d|n}\mu(d)=[n=1]$$

如何证明上式？考虑$n$的质因数分解以及其因数$d$的质因数分解：

$$n=\prod_{i=1}^{\omega(n)}p_i^{k_i}$$

显然地，我们可以用上式形式表达$n$的约数$d$：

$$d=\prod_{i=1}^{\omega(n)}p_i^{k'_i}$$

显然有$k'_i\leq k_i$，所以我们可以依次枚举$k'_i$得到$n$的所有约数，根据定义式，显然当其中任何一个$k'_i$取值大于$1$时，$\mu(d)=0$，因此我们只考虑$k'_i\leq 1$的情况。考虑枚举$k'_i$为$1$的个数，显然有：

$$\sum_{d|n}\mu(d)=\sum_{i=0}^{\omega(n)}(-1)^iC_{\omega(n)}^i$$

感性认识似乎很显然，但是怎么理性认识呢？不妨将组合数递推式$C_n^i=C_{n-1}^{i-1}+C_{n-1}^i(i>0)$带入上式：

$$\sum_{i=0}^{\omega(n)}(-1)^iC_{\omega(n)}^i=\sum_{i=0}^{\omega(n)}(-1)^iC_{\omega(n)-1}^{i-1}+\sum_{i=0}^{\omega(n)}(-1)^iC_{\omega(n)-1}^i$$

合并同类项有：

$$\sum_{i=0}^{\omega(n)}(-1)^iC_{\omega(n)-1}^{i-1}+\sum_{i=0}^{\omega(n)}(-1)^iC_{\omega(n)-1}^i=\sum_{i=0}^{\omega(n)-1}\left[(-1)^i+(-1)^{i+1}\right]C_{\omega(n)-1}^i$$

注意到$(-1)^i+(-1)^{i+1}=0$，因此对于$n>1$的情况有：

$$\sum_{d|n}\mu(d)=0$$

对于$n=1$的情况也有：

$$\sum_{d|n}\mu(d)=(-1)^0C_0^0=1$$

因此可得下式成立：

$$\sum_{d|n}\mu(d)=[n=1]$$

#### 莫比乌斯反演（Möbius inversion）

莫比乌斯反演的经典形式如下：

对于数论函数$f$与$g$，若其满足下式：

$$g(n)=\sum_{d|n}f(d)$$

则下式成立：

$$f(n)=\sum_{d|n}\mu(d)g\left(\frac nd\right)$$

该命题与其逆命题均成立。

至于如何证明上式，不妨先独立思考一下。这里将给出一种简单证明，后文将采用另一种方法证明上式。

考虑将$g\left(\frac nd\right)$展开：

$$f(n)=\sum_{d|n}\mu(d)g\left(\frac nd\right)=\sum_{d|n}\mu(d)\sum_{u|\frac nd}f(u)$$

接下来，我们将用一种常用的技巧：交换枚举顺序。考虑先枚举$u$，再枚举$d$。令$v=\frac nd$，则$v$为满足$u|v$与$v|n$的所有正整数。不妨提取因数$u$，则$\frac vu|\frac nu$，因此我们只需要枚举$\frac nu$的约数$c$得到$v$，此时$d=\frac n{cu}$。于是，我们可以得到下式：

$$f(n)=\sum_{d|n}\mu(d)\sum_{u|\frac nd}f(u)=\sum_{u|n}f(u)\sum_{c|\frac nu}\mu\left(\frac n{cu}\right)$$

还记得莫比乌斯函数的性质吗？我们发现，上式后半部分的求和恰好可以用莫比乌斯函数的性质化简：

$$f(n)=\sum_{u|n}f(u)\sum_{c|\frac nu}\mu\left(\frac n{cu}\right)=\sum_{u|n}f(u)\left[\frac nu=1\right]$$

这意味着，只有当$\frac nu=1$时，$f(u)$的系数才不为$0$，因此等式右侧等于$f(n)$，两侧相等，得证。

#### 一些应用

利用莫比乌斯函数的性质，我们可以推导出以下结论：

$$\sum_{i=1}^n\sum_{j=1}^m[\gcd(i,j)=1]=\sum_{d}\mu(d)\left\lfloor\frac nd\right\rfloor\left\lfloor\frac md\right\rfloor$$
$$\sum_{i=1}^n\sum_{j=1}^m[\gcd(i,j)=k]=\sum_{d}\mu(d)\left\lfloor\frac n{kd}\right\rfloor\left\lfloor\frac m{kd}\right\rfloor$$
$$\sum_{i=1}^n\sum_{j=1}^m\gcd(i,j)=\sum_{d}\varphi(d)\left\lfloor\frac nd\right\rfloor\left\lfloor\frac md\right\rfloor$$

其中，最后一个等式在后文给出另一个结论后，读者可尝试证明。

如何证明第一个等式？我们可以考虑先利用莫比乌斯函数的性质：

$$\sum_{i=1}^n\sum_{j=1}^m[\gcd(i,j)=1]=\sum_{i=1}^n\sum_{j=1}^m\sum_{d|\gcd(i,j)}\mu(d)$$

由于$d|\gcd(i,j)$，则$d|i$且$d|j$。因此我们考虑交换枚举顺序，先枚举$d$，此时$i,j$均为$d$倍数。若$i=ud$，$j=vd$，则有：

$$\sum_{i=1}^n\sum_{j=1}^m\sum_{d|\gcd(i,j)}\mu(d)=\sum_{d}\mu(d)\sum_{u=1}^{\left\lfloor\frac nd\right\rfloor}\sum_{v=1}^{\left\lfloor\frac md\right\rfloor}1$$

求和直接化简：

$$\sum_{d}\mu(d)\sum_{u=1}^{\left\lfloor\frac nd\right\rfloor}\sum_{v=1}^{\left\lfloor\frac md\right\rfloor}1=\sum_{d}\mu(d)\left\lfloor\frac nd\right\rfloor\left\lfloor\frac md\right\rfloor$$

得证。

对于第二条等式，显然$i|k$且$j|k$，考虑缩小枚举范围：

$$\sum_{i=1}^n\sum_{j=1}^m[\gcd(i,j)=k]=\sum_{i=1}^{\left\lfloor \frac nk\right\rfloor}\sum_{j=1}^{\left\lfloor \frac mk\right\rfloor}[\gcd(i,j)=1]$$

此时我们只需代入上式结论即有：

$$\sum_{i=1}^{\left\lfloor \frac nk\right\rfloor}\sum_{j=1}^{\left\lfloor \frac mk\right\rfloor}[\gcd(i,j)=1]=\sum_{d}\mu(d)\left\lfloor\frac n{kd}\right\rfloor\left\lfloor\frac m{kd}\right\rfloor$$

得到前两式成立。

#### 狄利克雷卷积（Dirichlet convolution）

对于两个数论函数$f$与$g$，其狄利克雷卷积定义如下：

$$(f*g)(n)=\sum_{d|n}f(d)g\left(\frac nd\right)$$

显然地，狄利克雷卷积具有交换律：

$$(f\*g)(n)=\sum_{d|n}f(d)g\left(\frac nd\right)=\sum_{d|n}g(d)f\left(\frac nd\right)=(g\*f)(n)$$

同时，利用交换枚举顺序，我们可以证明狄利克雷卷积具有结合律：

$$((f\*g)\*h)(n)=\sum_{u|n}h\left(\frac nu\right)\sum_{d|u}f(d)g\left(\frac ud\right)=\sum_{d|n}f(d)\sum_{c|\frac nd}g(c)h\left(\frac n{cd}\right)=(f\*(g\*h))(n)$$

对于两个积性函数$f$和$g$，$f*g$依然是积性函数。下式中$a,b$满足$(a,b)=1$：

$$\begin{aligned}(f\*g)(a)(f\*g)(b)&=\left[\sum_{u|a}f(u)g\left(\frac au\right)\right]\left[\sum_{v|b}f(v)g\left(\frac bv\right)\right]\\\\&=\sum_{u|a}\sum_{v|b}f(u)g\left(\frac au\right)f(v)g\left(\frac bv\right)\\\\&=\sum_{u|a}\sum_{v|b}f(uv)g\left(\frac {ab}{uv}\right)\\\\&=\sum_{d|ab}f(d)g\left(\frac {ab}d\right)\\\\&=(f\*g)(ab)\end{aligned}$$

对于积性函数$f$与数论函数$g$，若$f*g$为积性函数，则$g$也为积性函数。

我们还可以定义$f$与$g$的点值加法：

$$(f+g)(n)=f(n)+g(n)$$

显然满足分配律：

$$((f+g)\*h)(n)=\sum_{d|n}[f(n)+g(n)]h\left(\frac nd\right)=\sum_{d|n}\left[f(n)h\left(\frac nd\right)+g(n)h\left(\frac nd\right)\right]=(f\*h)(n)+(g\*h)(n)$$

若我们在数论函数集合$R$上定义两个二元运算加法与乘法$(+,*)$，分别为点值加法与狄利克雷卷积，显然其满足：

+ $(R,+)$构成交换群；
+ 乘法结合律；
+ 分配律；
+ 乘法交换律；

则$R$关于点值加法与狄利克雷卷积构成交换环$(R;+,*)$。

同时，我们可以定义$R$中乘法幺元，也即一个数论函数$\varepsilon$使得对于任意数论函数$f$满足$f\in R$，均满足$f*\varepsilon=f$：

$$\varepsilon(n)=[n=1]$$

对于数论函数$f$，我们有：

$$(f\*\varepsilon)(n)=\sum_{d|n}f(d)\varepsilon\left(\frac nd\right)=f(n)$$

因此$f*\varepsilon=f$成立，$\varepsilon$为环$R$中乘法幺元，$R$也为幺环。

环$(R;+,*)$称为狄利克雷环。

若对于$R$中满足$f(1)\neq 0$的数论函数$f$，存在数论函数$g$使得下式成立：

$$f*g=\varepsilon$$

则$g$称为$f$的狄利克雷逆元（Dirichlet inverse）。

#### 基本数论函数

除了上一节提及的狄利克雷环中的乘法幺元函数$\varepsilon$，我们还有很多其他的数论函数。接下来，我们将会定义一些简单的数论函数，并研究它们的性质。还记得上文提及的莫比乌斯反演的另一种证明方法吗？在本节中，我们将用狄利克雷卷积证明莫比乌斯反演公式。

常数函数$1$的定义如下：

$$1(n)=1$$

显然$1$为完全积性函数。

对于满足$C\subset\mathbb{Z}$的集合$C$，指示函数$1_C$的定义如下：

$$1_C(n)=[n\in C]$$

显然$1_C$不一定为积性函数。

恒等函数$Id$的定义如下：

$$Id(n)=n$$

显然$Id$为完全积性函数。

幂函数$Id_k$定义如下：

$$Id_k(n)=n^k$$

显然$Id_k$为完全积性函数。

根据狄利克雷卷积的性质与以上函数，我们可以将莫比乌斯函数的性质写成以下形式：

$$\mu*1=\varepsilon$$

这说明了$\mu$与$1$在狄利克雷环中互为狄利克雷逆元。

考虑如何利用上式证明莫比乌斯反演。不妨将莫比乌斯反演公式通过狄利克雷卷积表达：

对于数论函数$f$与$g$，若其满足下式：

$$f*1=g$$

则下式成立：

$$f=\mu*g$$

反之亦然。

我们考虑将$\mu*g$中$g$代换，则有：

$$\mu\*g=\mu\*(1\*f)$$

上一节提及，狄利克雷函数具有结合律：

$$\mu\*(1\*f)=(\mu\*1)\*f=\varepsilon\*f$$

在狄利克雷环中，$\varepsilon$为其乘法幺元，则

$$f=\mu\*g=\varepsilon\*f=f$$

故原式成立。同样地，我们也可以推出其逆命题成立：

$$g=f\*1=(\mu\*g)\*1=(\mu\*1)\*g=\varepsilon\*g=g$$

到此为止，我们已经完整地利用狄利克雷卷积的性质证明了莫比乌斯反演。

#### 刘维尔函数（Liouville function）

刘维尔函数定义如下：

$$\lambda(n)=(-1)^{\Omega(n)}$$

因为$\Omega$具有可加性，也即$\Omega(ab)=\Omega(a)+\Omega(b)$，因此刘维尔函数是一个完全积性函数。

若定义$Sq$为全体平方数构成的集合，即$Sq=\\{n^2|n\in\mathbb{Z}_+\\}$，则刘维尔函数性质可以用下式表达：

$$\lambda*1=1_{Sq}$$

如何证明上式？上式看起来似乎非常显然，不妨先独立思考。

我们先证明对于满足$n\not\in Sq$的正整数$n$，原式成立。考虑构造，由于$n\not\in Sq$，则一定存在$p\in\mathbb{P}$使得$\nu_p(n)$为奇数。对于$n$的任一因数$d$，令$u=\frac d{p^{\nu_p(d)}}$，将其与$p^{\nu_p(n)-\nu_p(d)}u$组成一对，则$\Omega(p^{\nu_p(n)-\nu_p(d)}u)$与$\Omega(d)$的奇偶性不同。因此有下式成立：

$$\begin{aligned}(\lambda*1)(n)&=\sum_{d|n}\lambda(d)\\\\&=\frac 12\sum_{d|n}\left[\lambda(d)+\lambda\left(p^{\nu_p(n)-2\nu_p(d)}d\right)\right]\\\\&=\frac 12\sum_{d|n}\left[(-1)^{\Omega(d)}+(-1)^{\Omega\left(p^{\nu_p(n)-2\nu_p(d)}d\right)}\right]\\\\&=\frac 12\sum_{d|n}(-1+1)\\\\&=\frac 12\sum_{d|n}0\\\\&=0\end{aligned}$$

对于除$1$外的$n\in Sq$的情况，我们可以利用狄利克雷卷积的性质。刘维尔函数$\lambda$与常数函数$1$均为积性函数，因此$\lambda*1$也为积性函数。考虑$n$的质因数分解，则有：

$$(\lambda\*1)(n)=\prod_{i=1}^{\omega(n)}(\lambda\*1)\left(p_i^{\nu_{p_i}(n)}\right)$$

由于$n\in Sq$，则所有$\nu_{p_i}(n)$均为偶数。显然地，$p_i^{\nu_{p_i}(n)}$的因子只可能为小于等于$p_i^{\nu_{p_i}(n)}$的$p_i$的幂。因此我们有下式成立：

$$\begin{aligned}(\lambda\*1)\left(p_i^{\nu_{p_i}(n)}\right)&=\sum_{a=0}^{\nu_{p_i}(n)}\lambda\left(p_i^a\right)\\\\&=\sum_{a=0}^{\nu_{p_i}(n)}(-1)^{\Omega\left(p_i^a\right)}\\\\&=\sum_{a=0}^{\nu_{p_i}(n)}(-1)^a\\\\&=\left\lceil\frac{\nu_{p_i}(n)+1}2\right\rceil-\left\lfloor\frac{\nu_{p_i}(n)+1}2\right\rfloor\\\\&=1\end{aligned}$$

因此有：

$$(\lambda\*1)(n)=\prod_{i=1}^{\omega(n)}(\lambda\*1)\left(p_i^{\nu_{p_i}(n)}\right)=\prod_{i=1}^{\omega(n)}1=1$$

对于$n=1$的特殊情况，显然有：

$$(\lambda\*1)(n)=\lambda(1)=(-1)^{\omega(1)}=(-1)^0=1$$

证明完毕。

#### 刘维尔函数的狄利克雷逆元

我们是否能找到一个函数$f$，使得$\lambda*f=\varepsilon$呢？

上一节末尾，我们利用了狄利克雷卷积的性质证明了$\lambda*1=1_{Sq}$，而$1_{Sq}$距离我们的目标$\varepsilon$也非常接近。我们考虑在常数函数$1$的基础上构造积性函数$f$，对于质数$p$与正整数$q$，使得下式成立：

$$(\lambda\*f)\left(p^q\right)=0$$

或许可以尝试列一些方程，并解一解这些方程得到小范围的$f$的值，找一找规律得到$f$的表达式。一个可行的想法是，当$n$不含质数平方因子时，令$f(n)=1$，否则令$f(n)=0$。此时$(\lambda\*f)\left(p^q\right)$中仅有$p^0$与$p^1$的两项值不为$0$，且将这两项值代入可得：

$$(\lambda\*f)\left(p^q\right)=\sum_{i=0}^q\lambda(p^i)f(p^{q-i})=\lambda(p^q)+\lambda(p^{q-1})=-1+1=0$$

同时，由于构造出的$f$函数显然为积性函数，因此对于除$1$外的正整数$n$，我们有：

$$(\lambda\*f)(n)=\prod_{i=1}^{\omega(n)}(\lambda\*f)\left(p_i^{\nu_{p_i}(n)}\right)=\prod_{i=1}^{\omega(n)}0=0$$

注意到$1$的特殊性质了吗？上一节末尾特别注明了$1$的特殊性，在这里，我们也将利用这个性质：

$$(\lambda\*f)(1)=\lambda(1)f(1)=(-1)^{\omega(1)}\times 1=(-1)^0\times 1=1$$

因此$\lambda*f=\varepsilon$成立。

回顾莫比乌斯函数的表达式，我们可以发现，实际上$f=|\mu|$。因此$\lambda$与$|\mu|$互为狄利克雷逆元，也即：

$$\lambda*|\mu|=\varepsilon$$

#### 约数计数函数

约数计数函数是另一类数论函数。

$\sigma_k(n)$的定义是$n$的所有约数的$k$次幂和，$k$可以为复数，也即：

$$\sigma_k(n)=\sum_{d|n}d^k$$

当$k=1$时，$\sigma_1(n)$为$n$的所有约数和，简记为$\sigma(n)$。

从组合意义方面考虑，$n$的每个约数相当于从$n$的$\omega(n)$个不同质数中，每个质数$p_i$选$0$到$\nu_{p_i}(n)$之间的整数作为其次幂，那么$\sigma_k(n)$相当于在每个次幂之上再乘$k$，也即：

$$\sigma_k(n)=\prod_{i=1}^{\omega(n)}\sum_{j=0}^{\nu_{p_i}(n)}p_i^{jk}$$

$d(n)$或$\tau(n)$的定义为$n$的约数个数。注意，此处的$\tau$函数与拉马努金$\tau$函数不同，因此我们通常使用$d$表示约数个数。当$k=0$时，$\sigma_0(n)$即为$n$的约数个数，则$\sigma_0=d=\tau$。由上式可得：

$$d(n)=\sigma_0(n)=\prod_{i=1}^{\omega(n)}\left[1+\nu_{p_i}(n)\right]$$

根据定义，我们可以得到以下结论：

$$\sigma_k=1*Id_k$$

当$k=0$时即：

$$d=1*1$$

#### 欧拉函数（Euler's totient function）

欧拉函数$\varphi(n)$的定义是，在不大于$n$的所有正整数中与$n$互质的整数数量。

欧拉函数的值可由下式计算：

$$\varphi(n)=n\prod_{p|n,p\in\mathbb{P}}\left(1-\frac 1p\right)$$

如果你对容斥足够熟悉，你会发现将上式展开之后即为容斥形式。由上式可知，欧拉函数为积性函数。接下来我们将通过另一种方式证明欧拉函数$\varphi$为积性函数。

我们根据定义可以写出下式：

$$\varphi(n)=\sum_{i=1}^n[\gcd(i,n)=1]$$

代入莫比乌斯函数的性质：

$$\sum_{i=1}^n[\gcd(i,n)=1]=\sum_{i=1}^n\sum_{d|\gcd(i,n)}\mu(d)$$

注意到$d|\gcd(i,n)$相当于$d|i$且$d|n$。交换枚举顺序：

$$\begin{aligned}&\sum_{i=1}^n\sum_{d|\gcd(i,n)}\mu(d)\\\\=&\sum_{d|n}\sum_{i=1}^{n/d}\mu(d)\\\\=&\sum_{d|n}\mu(d)\left(\frac nd\right)\end{aligned}$$

上式是狄利克雷卷积形式，也就意味着，我们有下式成立：

$$\varphi=\mu*Id$$

由于$\mu$与$Id$均为积性函数，因此$\varphi$也为积性函数。

通过莫比乌斯反演我们可以得到：

$$\varphi*1=Id$$

因此我们也有下式成立：

$$\sum_{d|n}\varphi(d)=n$$

还记得之前提及的结论吗？

$$\sum_{i=1}^n\sum_{j=1}^m\gcd(i,j)=\sum_{d}\varphi(d)\left\lfloor\frac nd\right\rfloor\left\lfloor\frac md\right\rfloor$$

这个结论可以通过前文提及的及本节中我们得到的以下结论完成证明：

$$\sum_{i=1}^n\sum_{j=1}^m[\gcd(i,j)=k]=\sum_{d}\mu(d)\left\lfloor\frac n{kd}\right\rfloor\left\lfloor\frac m{kd}\right\rfloor$$

$$\varphi=\mu*Id$$

证明并不繁杂，不妨自行尝试证明。

如何求$\varphi$的狄利克雷逆元？似乎我们可以先求$Id$的狄利克雷逆元，与$\mu$的狄利克雷逆元卷积。但是事情并没有那么简单，$Id$的逆元我们并不知道。下一节，我们将会用另一些工具，达成我们的目标。

#### 形式狄利克雷级数（Formal Dirichlet Series）

如果对形式幂级数有一定了解，那么你应该知道它忽略了收敛性，形式狄利克雷级数也是如此。对于数论函数$f$与复数$s$，其形式狄利克雷级数定义为：

$$\sum_{n=1}^\infty \frac{f(n)}{n^s}$$

为了方便，我们下文将使用$\hat f(s)$表示$f$的形式狄利克雷级数。

注意到，对于数论函数$f,g$，令$h=f*g$，$h$的形式狄利克雷级数为：

$$\hat h(s)=\sum_{n=1}^\infty \frac{h(n)}{n^s}=\sum_{n=1}^\infty\frac{1}{n^s}\sum_{d|n}f(d)g\left(\frac nd\right)$$

考虑交换枚举顺序，令$u=\frac nd$，则：

$$\hat h(s)=\sum_{n=1}^\infty\frac{1}{n^s}\sum_{d|n}f(n)g\left(\frac nd\right)=\sum_{d=1}^\infty\frac{f(d)}{d^s}\sum_{u=1}^\infty \frac{g(u)}{u^s}$$

注意到前后各为$f,g$的形式狄利克雷级数，则我们有：

$$\hat f(s)\cdot\hat g(s)=\hat h(s)$$

接下来我们可以利用这个性质，尝试计算一些数论函数的形式狄利克雷级数。但是在此之前，你需要先知道黎曼$\zeta$函数，接下来我们将多次利用这个函数简化我们的表达与运算。

对于复数$s$，黎曼$\zeta$函数的定义为：

$$\zeta(s)=\sum_{n=1}^\infty \frac{1}{n^s}$$

对于常数函数$1$，我们发现其形式狄利克雷级数为：

$$\hat 1(s)=\sum_{n=1}^\infty \frac{1(n)}{n^s}=\sum_{n=1}^\infty \frac{1}{n^s}=\zeta(s)$$

而对于狄利克雷环的幺元$\varepsilon$，其形式狄利克雷级数为：

$$\hat \varepsilon(s)=\sum_{n=1}^\infty \frac{\varepsilon(n)}{n^s}=\sum_{n=1}^\infty \frac{[n=1]}{n^s}=\frac{1}{1^s}=1$$

由于$\mu*1=\varepsilon$，因此$\hat\mu(s)\cdot\hat 1(s)=\hat \varepsilon(s)$成立：

$$\hat\mu(s)=\frac{\hat\varepsilon(s)}{\hat 1(s)}=\frac{1}{\zeta(s)}$$

对于幂函数$Id_k$，则有：

$$\hat{Id_k}(s)=\sum_{n=1}^\infty \frac{Id_k(n)}{n^s}=\sum_{n=1}^\infty \frac{n^k}{n^s}=\sum_{n=1}^\infty \frac{1}{n^{s-k}}=\zeta(s-k)$$

当$k=0$，也即对于恒等函数$Id$，其形式狄利克雷级数为：

$$\hat{Id}(s)=\sum_{n=1}^\infty \frac{Id(n)}{n^s}=\sum_{n=1}^\infty \frac{n}{n^s}=\sum_{n=1}^\infty \frac{1}{n^{s-1}}=\zeta(s-1)$$

由上一节的结论$\varphi=\mu*Id$可得：

$$\hat\varphi(s)=\hat\mu(s)\cdot\hat{Id}(s)=\frac{\zeta(s-1)}{\zeta(s)}$$

根据$d=1\*1$与$\sigma_k=1\*Id_k$可得：

$$\hat d(s)=\hat 1(s)\cdot \hat 1(s)=\zeta^2(s)$$
$$\hat \sigma_k(s)=\hat 1(s)\cdot \hat {Id_k}(s)=\zeta(s)\zeta(s-k)$$

对于刘维尔$\lambda$函数，我们可以从$\lambda*1=1_{Sq}$入手，$1_{Sq}$的形式狄利克雷级数为：

$$\hat {1_{Sq}}(s)=\sum_{n=1}^\infty\frac{[n\in Sq]}{n^s}=\sum_{n=1}^\infty\frac{1}{n^{2s}}=\zeta(2s)$$

由于$\lambda*1=1_{Sq}$，则有$\hat\lambda(s) \cdot\hat 1(s)=\hat{1_{Sq}}(s)$，因此可得：

$$\hat\lambda(s)=\frac{\hat{1_{Sq}}(s)}{\hat 1(s)}=\frac{\zeta(2s)}{\zeta(s)}$$

因为$\mu^2=|\mu|$，且$|\mu|*\lambda=\varepsilon$，因此：

$$\hat{\mu^2}(s)=\hat{|\mu|}(s)=\frac{\hat\varepsilon(s)}{\hat\lambda(s)}=\frac{\zeta(s)}{\zeta(2s)}$$

我们现在要求欧拉$\varphi$函数的狄利克雷逆元，相当于找到函数$f$使得下式成立：

$$\hat f(s)\cdot \hat\varphi(s)=\hat\varepsilon(s)=1$$

也即：

$$\hat f(s)=\frac{\zeta(s)}{\zeta(s-1)}$$

这样的函数并不难构造，分子部分是$\hat 1(s)$，而分母部分为$\hat \mu(s-1)$。$\hat \mu(s)$与$\hat \mu(s-1)$的关系很简单，若$\cdot$代表点值乘法，考虑函数$g(n)=Id(n)\cdot \mu(n)$，其形式狄利克雷级数为：

$$\hat g(s)=\sum_{n=1}^\infty \frac{Id(n)\cdot\mu(n)}{n^s}=\sum_{n=1}^\infty \frac{\mu(n)}{n^{s-1}}=\hat \mu(s-1)$$

那么我们可以构造：

$$\hat f(s)=\frac{\zeta(s)}{\zeta(s-1)}=\hat 1(s)\hat {(Id\cdot \mu)}(s)$$

也即：

$$f=1*(Id\cdot \mu)$$

展开可得：

$$f(n)=\sum_{d|n}d\mu(d)$$

如果你仔细观察，应该会发现，对于一个函数$f$，若其形式狄利克雷级数$\hat f(s)=\zeta(s')$，则$f\cdot Id_k$的形式狄利克雷级数$\hat {(f\cdot Id_k)}(s)=\zeta(s'-k)$。利用这一结论，我们可以得到：

$$Id_k*(Id_k\cdot \mu)=\varepsilon$$

不妨在形式狄利克雷级数的视角下看待上式：

$$\hat {Id_k}(s)\cdot\hat {(Id_k\cdot\mu)}(s)=\zeta(s-k)\frac{1}{\zeta(s-k)}=1$$

显然成立。

#### 如何加速积性函数求值

普通的筛法，也即 Eratosthenes 筛法（埃氏筛），对于每个自然数都筛去其倍数。因此处理前$n$个自然数总共需要的计算次数为：

$$\sum_{i=1}^n\frac{n}{i}=n\sum_{i=1}^n\frac{1}{i}$$

后半部分可以积分得到：

$$\sum_{i=1}^n\frac{1}{i}\leq 1+\int_1^n\frac 1x\mathbb{d}x=1+\ln n-\ln 1=1+\ln n$$

由此可得直接计算的时间复杂度为$O(n \log n)$。

利用完全积性函数的性质，我们可以采用线性筛法计算前$n$个自然数的完全积性函数值。不妨先观察如下伪代码：

$$\begin{aligned}&\mathbf{for}\mathtt{\ each\ natural\ number\ }n\mathtt{\ greater\ than\ }1\\\\&\mathtt{\quad}\mathbf{if}\mathtt{\ }n\mathtt{\ is\ a\ prime}\\\\&\mathtt{\quad\quad calculate\ }f(n)\\\\&\mathtt{\quad\quad insert\ }n\mathtt{\ into\ the\ prime\ set\ }\mathbb{P}\\\\&\mathtt{\quad}\mathbf{for}\mathtt{\ each\ prime\ }p\in\mathbb{P}\mathtt{\ in\ increasing\ order}\\\\&\mathtt{\quad\quad}p\*n\mathtt{\ is\ not\ a\ prime}\\\\&\mathtt{\quad\quad}f(p\*n) = f(n)\*f(p)\\\\&\mathtt{\quad\quad}\mathbf{if}\mathtt{\ }p|n\\\\&\mathtt{\quad\quad\quad}\mathbf{break}\end{aligned}$$

显然地，对于$n$以内除$1$外的每个自然数$u$，其函数值均由其最小的质因子$p$与$\frac up$的函数值相乘得到，因此这种线性筛法时间复杂度为$O(n)$。

若所求函数不为完全积性函数但为积性函数，可以在判断$p|n$时采用其他方式计算其函数值。

对于莫比乌斯反演中经常出现的$\left\lfloor \frac nd\right\rfloor$，显然地，对于$1\leq d\leq n$，其不同的值最多为$2\sqrt{n}$个，对其他部分前缀和预处理，枚举不同取值即可做到$O(\sqrt{n})$的优秀复杂度。对于狄利克雷卷积也可采取这种方法加速运算。

（完）