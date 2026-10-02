# 矩阵分析 习题

**题 4.1**　设 $\Vert\cdot\Vert_\alpha$ 表示复线性空间 $\mathbb{C}^n$ 的 $\alpha$ 范数，$\alpha = 1, 2, \dots, \infty$，设 $x\in\mathbb{C}^n$，则必有：

1. $\Vert x\Vert_1\leq \Vert x\Vert_2\leq \Vert x\Vert_\infty$
2. $\Vert x\Vert_2\leq \Vert x\Vert_1\leq \Vert x\Vert_\infty$
3. $\Vert x\Vert_\infty\leq \Vert x\Vert_1\leq \Vert x\Vert_2$
4. $\Vert x\Vert_\infty\leq \Vert x\Vert_1\leq n\Vert x\Vert_\infty$

> **解**　$\boxed{\text{(4)}}$． $\square$

&nbsp;

**题 4.2**　设 $\mathrm{e}^{At} = \begin{bmatrix}\mathrm{e}^{2t} & 12\mathrm{e}^t - 12\mathrm{e}^{2t} + 13t\mathrm{e}^{2t} & -4\mathrm{e}^t + 4\mathrm{e}^{2t} \\ 0 & \mathrm{e}^{2t} & 0 \\ 0 & -3\mathrm{e}^t+3\mathrm{e}^{2t} & \mathrm{e}^t\end{bmatrix}$，则 $A = \underline{\qquad}$．

> **解**　由 $\mathrm{e}^{At} = I + At + {A^2t^2\over 2!} + {A^3t^3\over 3!} + \cdots$ 可得
>
> $$
> A = \left.\left({\mathrm{d}\over \mathrm{d} t} \mathrm{e}^{At}\right)\right|_{t=0} = \boxed{\begin{bmatrix}2&1&4\\0&2&0\\0&3&1\end{bmatrix}}
> $$
>
> $\square$

&nbsp;

**题 4.3**　设 $f(A) = \sum_{k=1}^\infty {A^k\over k}$ 收敛，则 $A$ 可以取为：

1. $\begin{bmatrix}0&0\\-9&-1\end{bmatrix}$
2. $\begin{bmatrix}0&0\\-9&1\end{bmatrix}$
3. $\begin{bmatrix}1&0\\-1&1\end{bmatrix}$
4. $\begin{bmatrix}1&0\\0.1&1\end{bmatrix}$

> **解**　$\boxed{\text{(1)}}$．幂级数 $\sum_{k=1}^\infty {x^k\over k}$ 在 $[-1, 1)$ 上收敛，注意到 $1$ 是 (2)(3)(4) 的特征值，因此 (2)(3)(4) 不正确．对于 (1)，有 $A^n = (-1)^{n-1} A$，因此依 Leibniz 判别法知 $f(A)$ 收敛． $\square$

&nbsp;

**题 4.4**　设方阵 $A$ 幂收敛到方阵 $B$，则下列说法正确的有：（多选）

1. $|B| = 0$．
2. $B$ 是幂等矩阵．
3. $AB = BA = B$．
4. $\operatorname{rank} A \geq \operatorname{rank} B$．

> **解**　$\boxed{\text{(2)(3)(4)}}$．取 $A = I$ 即知 (1) 错误． $\square$

&nbsp;

**题 4.5**　设 $n$ 维向量 $x = {1\over\sqrt n}[1, \dots, 1]^\mathsf{T}$ 且 $n\geq 2$，$B = I-xx^\mathsf{T}$，则下列选项正确的是：

1. $\left\Vert B \right\Vert_1 = 1$
2. $\left\Vert B \right\Vert_\infty = 1$
3. $\left\Vert B \right\Vert_2 = 1$
4. $\left\Vert B \right\Vert_F = 1$

> **解**　$\boxed{\text{(3)}}$．$B^\mathsf{T} B = B^2 = B$ 的特征值为 $0$ 与 $1$，因此 $\left\Vert B \right\Vert_2 = \sqrt{\lambda_{\max}(B^\mathsf{T} B)} = \sigma_{\max}(B) = 1$． $\square$

&nbsp;

**题 4.6**　设 $A$ 是实的反对称矩阵，则下列命题正确的是：

1. $\mathrm{e}^A$ 是实的反对称矩阵．
2. $\mathrm{e}^A$ 是正交矩阵．
3. $\cos A$ 是实的反对称矩阵．
4. $\sin A$ 是实的对称矩阵．

> **解**　$\boxed{\text{(2)}}$．$A$ 的特征值为 $0$ 或纯虚数，因此实阵 $\mathrm{e}^A$ 的特征值的模为 $1$，$\mathrm{e}^A$ 为正交矩阵．
>
> 或者注意到 $A$ 与 $A^\mathsf{T}$ 可交换，因此
>
> $$
> (\mathrm{e}^A)^\mathsf{T} \mathrm{e}^A = \mathrm{e}^{A^\mathsf{T}} \mathrm{e}^A = \mathrm{e}^{A^\mathsf{T} + A} = \mathrm{e}^O = I
> $$
>
> 从而 $\mathrm{e}^A$ 为正交矩阵． $\square$

&nbsp;

**题 4.7**　设 $A$ 是可逆矩阵，则 $\int_0^1 \mathrm{e}^{At}\,\mathrm{d} t =$ $\underline{\qquad}$．

> **解**　$\boxed{A^{-1}(\mathrm{e}^A - I)}$． $\square$

&nbsp;

**题 4.8**　设非零矩阵 $A\in\mathbb{R}^{n\times n}$，$\operatorname{tr} A = 0$ 且 $\left\Vert A \right\Vert_F = \left\Vert A \right\Vert_2$，则下列说法不正确的是：

1. $A$ 是单纯矩阵．
2. $A$ 为秩 $1$ 矩阵．
3. $A$ 的最小多项式为 $\lambda^2$．
4. $A$ 的所有特征值均为 $0$．

> **解**　$\boxed{\text{(1)}}$．$\left\Vert A \right\Vert_F = \sqrt{\operatorname{tr}(A^\mathsf{H} A)}$，$\left\Vert A \right\Vert_2 = \sqrt{\lambda_{\max}(A^\mathsf{H} A)}$，这说明 $A^\mathsf{H} A$ 至多有一个非零特征值．由于 $A\neq O$ 且 $A^\mathsf{H} A$ 与 $A$ 同解，可得 $\operatorname{rank} A = 1$．由于 $\operatorname{tr} A = 0$ 为 $A$ 的所有特征值之和，$A$ 的特征值均为 $0$，$A \sim \operatorname{diag}(J_2(0), 0, \dots)$，不为单纯矩阵． $\square$

&nbsp;

**题 4.9**　已知 $A = \begin{bmatrix}\frac 16 & -\frac 43 \\ -\frac 13 & \frac 16\end{bmatrix}$，则 $A$ 的谱半径 $\rho(A) = $ $\underline{\qquad}$．

> **解**　$\varphi_A(\lambda) = (\lambda - {1\over 6})^2 - {4\over 9}$，$A$ 的特征值为 ${1\over 6} \pm {2\over 3}$，$\rho(A) = \boxed{{5\over 6}}$． $\square$

&nbsp;

**题 4.10**　已知 $A = \begin{bmatrix}0 & c & c \\ c & 0 & c \\ c & c & 0\end{bmatrix}$，则 $\lim_{k\to\infty} A^k = 0$ 的充分必要条件是$\underline{\qquad}$．

> **解**　容易求出 $\varphi_A(\lambda) = \lambda^3 - 3c^2\lambda + 2c^3 = (\lambda - c)^2(\lambda + 2c)$，$A$ 的特征值即为 $c, -2c$，因此要求 $|-2c| < 1 \iff \boxed{|c| < {1\over 2}}$． $\square$

&nbsp;

**题 4.11**　已知 $A = \begin{bmatrix}\frac 16 & -\frac 43 \\ -\frac 13 & \frac 16\end{bmatrix}$，则 $\sum_{k=0}^\infty A^k$ 收敛且其和为$\underline{\qquad}$．

> **解**　$$
> \sum_{k=0}^\infty A^k = (I - A)^{-1} = \begin{bmatrix}\frac 56 & \frac 43 \\ \frac 13 & \frac 56\end{bmatrix}^{-1} = \begin{bmatrix}\frac{10}3 & -\frac{16}3 \\ -\frac 43 & \frac {10}3\end{bmatrix}
>
> $$
> $\square$

&nbsp;

**题 4.12**　若 $x$ 为 $n$ 维向量（$n>1$），对于任意的 $0<p<1$，$x = \left(\sum_{i=1}^n |x_i|^p\right)^{1\over p}$ 是向量范数．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 4.13**　若 $A$ 是 $n$ 阶方阵，则 $A^k$ 收敛的充要条件是其谱范数小于 $1$．

> **解**　$\boxed{\times}$．例如考虑 $I$． $\square$

&nbsp;

**题 4.14**　若 $x = [x_1, \dots, x_n]^\mathsf{T} \in \mathbb{C}^n$，则 $\left\Vert x \right\Vert = |x_1|^2$ 为向量范数．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 4.15**　设 $x\in\mathbb{C}^n$，$U$ 为 $n$ 阶酉矩阵，则 $\left\Vert Ux \right\Vert_2 = \left\Vert x \right\Vert_2$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.16**　$A$ 为 $n$ 阶实对称矩阵，对 $\mathbb{R}^n$ 中的列向量 $x$，定义 $\left\Vert x \right\Vert = \sqrt{x^\mathsf{T} A x}$，则 $\left\Vert x \right\Vert$ 为向量 $x$ 的范数．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 4.17**　设 $A\in\mathbb{C}^{n\times n}$，则 $\left\Vert A \right\Vert_{v2}^2 \geq \sum_{i=1}^n |\lambda_i|^2$．

> **解**　$\boxed{\surd}$．考虑 $A$ 的 Schur 分解，存在酉方阵 $U$ 将 $A$ 相似到上三角矩阵 $\Lambda = U^\mathsf{H} A U$，则 $\left\Vert A \right\Vert_F^2 = \left\Vert \Lambda \right\Vert_F^2 = \operatorname{tr}(\Lambda^\mathsf{H}\Lambda) \geq \sum_{i=1}^n |\lambda_i|^2$． $\square$

&nbsp;

**题 4.18**　设 $A$ 为 $n$ 阶 Hermite 矩阵，$\lambda_1, \dots, \lambda_n$ 是矩阵 $A$ 的特征值，则 $\left\Vert A \right\Vert_{v2}^2 = \sum_{i=1}^n \lambda_i^2$．

> **解**　$\boxed{\surd}$．Hermite 阵可酉对角化到实对角阵，沿用之前结论即可． $\square$

&nbsp;

**题 4.19**　若 $A$ 为 $n$ 阶正规矩阵，则 $A$ 的谱范数为其最小的矩阵范数．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.20**　设 $A\in\mathbb{C}^{n\times n}$ 为正规矩阵，则矩阵的谱半径 $\rho(A) = \left\Vert A \right\Vert_2$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.21**　设 $n$ 阶矩阵 $A$ 不可逆，则 $\cos A$ 亦不可逆．

> **解**　$\boxed{\times}$．若 $A$ 有特征值 $\lambda$，则 $\cos A$ 有特征值 $\cos\lambda$．$\lambda = 0 \implies \cos\lambda = 1$，并不意味着 $\cos\lambda = 0$． $\square$

&nbsp;

**题 4.22**　列向量 $\alpha, \beta\in\mathbb{R}^n$，$\left\Vert \alpha+\beta \right\Vert_2 = \left\Vert \alpha \right\Vert_2 + \left\Vert \beta \right\Vert_2$ 的充要条件是 $\alpha$ 与 $\beta$ 线性相关，且 $\alpha^\mathsf{T}\beta\geq 0$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.23**　设 $A,B\in\mathbb{C}^{n\times n}$ 都是可逆矩阵，且齐次线性方程组 $(A+B)x=0$ 有非零解，则对于 $\mathbb{C}^{n\times n}$ 中的任何矩阵范数 $\left\Vert \cdot \right\Vert$，都有 $\left\Vert A^{-1}B \right\Vert \geq 1$ 及 $\left\Vert AB^{-1} \right\Vert \geq 1$．

> **解**　$\boxed{\surd}$．考虑反证法，若 $\left\Vert A^{-1}B \right\Vert < 1$，则 $(I + A^{-1}B)^{-1} = \sum_{k=0}^\infty (-1)^k(A^{-1}B)^k$ 收敛存在，于是 $A+B = A(I+A^{-1}B)$ 可逆，这与 $(A+B)x=0$ 有非零解矛盾，从而 $\left\Vert A^{-1}B \right\Vert \geq 1$．对于 $\left\Vert AB^{-1} \right\Vert$ 同理． $\square$

&nbsp;

**题 4.24**　设 $A$ 是可逆矩阵，则 $\int_0^t \mathrm{e}^{A\tau}\,\mathrm{d}\tau = A^{-1}\mathrm{e}^{At}-A^{-1}$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.25**　设 $A$ 为 $n$ 阶矩阵，则 $\det \mathrm{e}^A = \mathrm{e}^{\operatorname{tr} A}$．

> **解**　$\boxed{\surd}$．存在可逆阵 $P$ 将 $A$ 相似到 Jordan 标准型 $J = P^{-1}AP$，于是
> $$
>
> \det \mathrm{e}^A = \det(P\mathrm{e}^JP^{-1}) = \det{\mathrm{e}^{PAP^{-1}}} = \det{\mathrm{e}^J} = \prod_i \mathrm{e}^{J_{ii}} = \exp\left(\sum_{i} J_{ii}\right) = \mathrm{e}^{\operatorname{tr} J}
>
> $$
> $\square$

&nbsp;

**题 4.26**　设 $A\in\mathbb{C}^{n\times n}$ 是不可逆矩阵，则对任一相容矩阵范数 $\left\Vert \cdot \right\Vert$ 有 $\left\Vert I-A \right\Vert \geq 1$，其中 $I$ 为单位阵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.27**　设 $A$ 是 4 阶复矩阵，定义 $\left\Vert A \right\Vert = \left(\sum_{\substack{1\leq i\leq 4\\1\leq j\leq 4}} |a_{ij}|^2\right)^{1\over 2}$，$A^\mathsf{H} A$ 的非零特征值分别为 $4, 5, 7$，则 $\left\Vert A \right\Vert =$ $\underline{\qquad}$．

> **解**　$\left\Vert A \right\Vert = \sqrt{\operatorname{tr}(A^\mathsf{H} A)} = \sqrt{4+5+7} = \boxed{4}$． $\square$

&nbsp;

**题 4.28**　矩阵 $A = \begin{bmatrix}1&2\\2&1\\0&0\end{bmatrix}$ 的正奇异值为$\underline{\qquad}$．

> **解**　计算可得 $A^\mathsf{H} A = \begin{bmatrix}5&4\\4&5\end{bmatrix}$，其特征值为 $1, 9$，于是 $A$ 的正奇异值为 $\boxed{1, 3}$． $\square$

&nbsp;

**题 4.29**　设 $A = (a_{ij})_{n\times n}$（$n>1$）按列严格对角占优，且 $a_{ii}<0$（$1\leq i\leq n$），则下列说法正确的是：

1. $A$ 的特征值的实部小于零．
2. $A$ 的特征值的实部大于零．
3. $A$ 的特征值的实部等于零．
4. 不确定．

> **解**　$\boxed{\text{(1)}}$．由 $0>a_{ii}\in\mathbb{R}$ 可知 Gershgorin 圆盘均在虚轴左侧，$A$ 的特征值实部均小于 $0$． $\square$

&nbsp;

**题 4.30**　设 $A = \begin{bmatrix}1&1\\0&1\end{bmatrix}$，则关于矩阵幂级数 $\sum_{k=1}^\infty {(-1)^k\over k^2}A^k$，下列说法正确的是：

1. 收敛，但不绝对收敛．
2. 绝对收敛．
3. 发散．
4. 无法判断．

> **解**　$\boxed{\text{(1)}}$．首先有 $A^k = \begin{bmatrix}1&k\\0&1\end{bmatrix}$，于是依 Leibniz 判别法可知数项级数 $\sum_{k=1}^\infty {(-1)^k\over k^2}(A^k)_{12} = \sum_{k=1}^\infty {(-1)^k\over k}$ 条件收敛，其余数项级数绝对收敛． $\square$

&nbsp;

**题 4.31**　已知 $A = \begin{bmatrix}1&-8\\-2&1\end{bmatrix}$，则矩阵幂级数 $\sum_{k=0}^\infty {k\over 6^k}A^k$：

1. 绝对收敛．
2. 收敛但不绝对收敛．
3. 发散．
4. 无法判断．

> **解**　$\boxed{\text{(1)}}$．$A$ 与 $\operatorname{diag}(-3, 5)$ 相似，因此幂级数绝对收敛． $\square$

&nbsp;

**题 4.32**　设 $x = \begin{bmatrix}2\mathrm{i}\\-2\\\mathrm{i}\end{bmatrix}$，则 $\left\Vert x \right\Vert_1, \left\Vert x \right\Vert_2$ 分别为$\underline{\qquad}$．

> **解**　$\left\Vert x \right\Vert_1 = 2+2+1 = \boxed{5}$，$\left\Vert x \right\Vert_2 = \sqrt{2^2+2^2+1^2} = \boxed{3}$． $\square$

&nbsp;

**题 4.33**　设 $A = \begin{bmatrix}{1\over 10}&-{1\over 5}\\{4\over 5}&{1\over 10}\end{bmatrix}$，则幂级数 $\sum_{k=1}^\infty (-1)^k k^2 A^k$：

1. 收敛但不绝对收敛．
2. 绝对收敛．
3. 发散．
4. 无法判断．

> **解**　$\boxed{\text{(2)}}$．幂级数收敛半径为 $1$，$A$ 的特征值为 ${1\over 10}\pm {2\over 5}\mathrm{i}$，特征值的模为 ${\sqrt{17}\over 10} < 1$，因此绝对收敛． $\square$

&nbsp;

**题 4.34**　设 $A$ 是 $n$ 阶复矩阵，且 $A^\mathsf{H} A$ 的谱半径小于 $1$，则对矩阵幂序列 $I, A, A^2, A^3, \dots$ 有：

1. 收敛于零．
2. 收敛于非零矩阵．
3. 发散．
4. 收敛与否与 $A$ 有关．

> **解**　$\boxed{\text{(1)}}$． $\square$

&nbsp;

**题 4.35**　设 $f(A) = \sum_{k=1}^\infty {A^k\over k}$ 收敛，则 $A$ 可以取为：

1. $\begin{bmatrix}0&0\\-6&-1\end{bmatrix}$
2. $\begin{bmatrix}0&0\\-6&1\end{bmatrix}$
3. $\begin{bmatrix}1&0\\-1&1\end{bmatrix}$
4. $\begin{bmatrix}1&0\\0.1&1\end{bmatrix}$

> **解**　$\boxed{\text{(1)}}$．这与题 4.3 是相同的． $\square$

&nbsp;

**题 4.36**　设 $A$ 是 $n$ 阶正规矩阵，则关于它的 F–范数说法正确的是：

1. $\left\Vert A^2 \right\Vert_F = \left\Vert A \right\Vert_F^2$
2. $\left\Vert A^2 \right\Vert_F = \left\Vert A^\mathsf{H} A \right\Vert_F$
3. $\left\Vert A \right\Vert_F = \sup_{x\neq 0}{x^\mathsf{H} A x \over x^\mathsf{H} x}$
4. $\left\Vert A \right\Vert_F^2 = \sup_{x\neq 0}{x^\mathsf{H} A^\mathsf{H} A x \over x^\mathsf{H} x}$

> **解**　$\boxed{\text{(2)}}$．$\operatorname{tr}((A^2)^\mathsf{H} A^2) = \operatorname{tr}(A^\mathsf{H} A A^\mathsf{H} A) = \operatorname{tr}((A^\mathsf{H} A)^\mathsf{H} A^\mathsf{H} A)$． $\square$

&nbsp;

**题 4.37**　设 $A$ 是复方阵，$\rho(A)$ 是 $A$ 的谱半径，则矩阵幂级数 $\sum_{k=1}^\infty {(-1)^k\over 2^k}\left({A\over \rho(A)}\right)^k$：

1. 绝对收敛．
2. 收敛但不绝对收敛．
3. 发散．
4. 不确定．

> **解**　$\boxed{\text{(1)}}$． $\square$

&nbsp;

**题 4.38**　下列矩阵范数中不是算子范数的是：

1. $\left\Vert A \right\Vert_1$
2. $\left\Vert A \right\Vert_2$
3. $\left\Vert A \right\Vert_\infty$
4. $\left\Vert A \right\Vert_F$

> **解**　$\boxed{\text{(4)}}$． $\square$

&nbsp;

**题 4.39**　形如 $A = \begin{bmatrix}
a_0 & a_1 & a_2 & \cdots & a_{n-1} \\
a_{n-1} & a_0 & a_1 & \cdots & a_{n-2} \\
a_{n-2} & a_{n-1} & a_0 & \cdots & a_{n-3} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
a_1 & a_2 & a_3 & \cdots & a_0
\end{bmatrix}$ 的矩阵称为循环矩阵，则下列说法正确的是：（多选）

1. $A$ 的任意特征根满足 $|\lambda(A)| \leq \sum_{i=0}^{n-1}|a_i|$．
2. $A$ 是单纯矩阵．
3. 若 $B$ 也是循环矩阵，则 $AB$ 也是循环矩阵．
4. 若 $B$ 也是循环矩阵，则 $A+B$ 也是循环矩阵．

> **解**　$\boxed{\text{(1)(2)(3)(4)}}$．
>
> - 对于 (1)，显然 $|\lambda| \leq \left\Vert A \right\Vert_1 = \sum_{0\leq i<n}|a_i|$．
>
> - 对于 (2)，首先令 $K = \begin{bmatrix}& 1 \\ & & \ddots \\ & & & 1 \\ 1\end{bmatrix}$，注意到 $\lambda^n - 1$ 是 $K$ 的零化多项式，$K$ 的特征值互不相同．由 $A = \sum_{i=0}^{n-1} a_iK^i$，$K$ 的属于特征值 $\omega_n^k$ 的特征向量也是 $A$ 的属于特征值 $\sum_{i=0}^{n-1} a_i\omega_n^{ik}$ 的特征向量，因此 $A$ 有 $n$ 个线性无关的特征向量，$A$ 是单纯矩阵．
>
> - 对于 (3)，有
>    $$
>    (AB)_{ij} = \sum_{k=1}^{n} A_{ik}B_{kj} = \sum_{k=1}^n a_{(k-i)\bmod n} b_{(j-k)\bmod n} \overset{t=k-i}{=} \sum_{t=0}^{n-1} a_t b_{(j-i-t)\bmod n}
>    $$
>    仅与 $(j-i) \bmod n$ 相关，因此 $AB$ 也为循环矩阵． $\square$

&nbsp;

**题 4.40**　已知 $n$ 阶矩阵 $A$ 的谱半径小于 $1$，则 $\sum_{k=0}^\infty kA^k = $：（多选）

1. $A(I-A)^{-2}$
2. $(I-A)^{-1}A(I-A)^{-1}$
3. $(I-A)^{-2}A$
4. $A(I-A)^{-1}$

> **解**　$\boxed{\text{(1)(2)(3)}}$．这个幂级数即是
> $$
>
> \sum_{k=0}^\infty kx^k = x\sum_{k=1}^\infty kx^{k-1} = x\left(\sum_{k=0}^\infty x^k\right)' = x\left({1\over 1-x}\right)' = {x\over (1-x)^2}
>
> $$
> $\square$

&nbsp;

**题 4.41**　已知 $A = \begin{bmatrix}
0 & \frac{\mathrm{i}}4 & \frac{\mathrm{i}}3 & \frac{\mathrm{i}}2 \\
\frac{\mathrm{i}}2 & 0 & \frac{\mathrm{i}}4 & \frac{\mathrm{i}}3 \\
\frac{\mathrm{i}}3 & \frac{\mathrm{i}}2 & 0 & \frac{\mathrm{i}}4 \\
\frac{\mathrm{i}}4 & \frac{\mathrm{i}}3 & \frac{\mathrm{i}}2 & 0 \\
\end{bmatrix}$，$x = \begin{bmatrix}1\\\mathrm{i}\\1\\\mathrm{i}\end{bmatrix}$，则下列说法正确的是：（多选）

1. $\rho(A) = {13\over 12}$
2. $\left\Vert A \right\Vert_1 = {13\over 12}$
3. $\left\Vert A \right\Vert_\infty = {13\over 12}$
4. $\left\Vert Ax \right\Vert_\infty = {13\over 12}$

> **解**　$\boxed{\text{(1)(2)(3)}}$． $\square$

&nbsp;

**题 4.42**　设 $A = \begin{bmatrix}0 & {\mathrm{i}\over 2} \\ \mathrm{i} & 0\end{bmatrix}$，则下列说法正确的是：（多选）

1. 矩阵 $A^k$ 收敛．
2. 矩阵 $A^k$ 发散．
3. 矩阵幂级数 $\sum_{k=0}^\infty {(-1)^k\over 2^k}A^{k+1}$ 收敛．
4. 矩阵幂级数 $\sum_{k=0}^\infty {(-1)^k\over 2^k}A^{k+1}$ 绝对收敛．

> **解**　$\boxed{\text{(1)(3)(4)}}$． $\square$

&nbsp;

**题 4.43**　设 $A$ 是可逆矩阵，${1\over \left\Vert A^{-1} \right\Vert} = a$，$\left\Vert B-A \right\Vert = b$，其中 $\left\Vert \cdot \right\Vert$ 是诱导范数．若 $b<a$，则下列说法正确的是：（多选）

1. $B$ 是可逆矩阵．
2. $\left\Vert B^{-1} \right\Vert \leq {1\over a-b}$．
3. $\left\Vert B^{-1} - A^{-1} \right\Vert \leq {b\over a(a-b)}$．
4. $\left\Vert (I-A)^{-1} \right\Vert \leq {1\over 1-a}$．

> **解**　$\boxed{\text{(1)(2)(3)}}$．由 $\left\Vert \cdot \right\Vert$ 是诱导范数可知 $\left\Vert I \right\Vert = 1$，于是有：
>
> - $1 > {b\over a} = \left\Vert B-A \right\Vert\left\Vert A^{-1} \right\Vert \geq \left\Vert BA^{-1} - I \right\Vert = \left\Vert I - BA^{-1} \right\Vert$，从而 $BA^{-1}$ 可逆．
>
> - $\left\Vert AB^{-1} \right\Vert = \left\Vert (BA^{-1})^{-1} \right\Vert \leq {\left\Vert I \right\Vert \over 1 - \left\Vert I - BA^{-1} \right\Vert} < {1\over 1 - {b\over a}} = {a\over a-b}$．
>
> - $\left\Vert B^{-1} \right\Vert \leq \left\Vert A^{-1} \right\Vert\left\Vert AB^{-1} \right\Vert \leq {1\over a}\cdot{a\over a-b} = {1\over a-b}$．
>
> - $\left\Vert B^{-1} - A^{-1} \right\Vert = \left\Vert A^{-1} - B^{-1} \right\Vert \leq \left\Vert A^{-1} \right\Vert\left\Vert B - A \right\Vert\left\Vert B^{-1} \right\Vert \leq {1\over a}\cdot b\cdot{1\over a-b} = {b\over a(a-b)}$． $\square$

&nbsp;

**题 4.44**　若矩阵 $A$ 满足 $\lim_{n\to\infty}A^n = A$，则下列说法正确的是：（多选）

1. 若 $A$ 是可逆矩阵，则 $A$ 只能是单位矩阵．
2. 若 $A$ 是可逆矩阵，则 $A$ 不一定是单位矩阵．
3. 若 $A$ 是不可逆矩阵，则 $A$ 只能是零矩阵．
4. 若 $A$ 是不可逆矩阵，则 $A$ 的特征值只能是 0 或 1．

> **解**　$\boxed{\text{(1)(4)}}$． $\square$

&nbsp;

**题 4.45**　设 $B$ 是 $n$ 阶实矩阵，若 $B$ 的 $n$ 个盖尔圆彼此分离，则 $B$：（多选）

1. 可对角化．
2. 不可对角化．
3. 所有特征值都是实数．
4. 可能出现共轭复根．

> **解**　$\boxed{\text{(1)(3)}}$． $\square$

&nbsp;

**题 4.46**　已知 $A$ 是 5 阶方阵，其特征多项式为 $f(\lambda) = (\lambda - {1\over 3})(\lambda-1)^2(\lambda - {1\over 5})^2$，且 $\operatorname{rank}(I-A)=3$，则矩阵序列 $\left\{ A^k \right\}$ 收敛．

> **解**　$\boxed{\surd}$．$A$ 的 Jordan 型为 $\operatorname{diag}(1, 1, {1\over 3}, {1\over 5}, {1\over 5})$ 或 $\operatorname{diag}(1, 1, {1\over 3}, J_2({1\over 5}))$． $\square$

&nbsp;

**题 4.47**　设 $A = \begin{bmatrix}0&0&0\\-1&2&1\\1&-1&0\end{bmatrix}$，则 $A\mathrm{e}^{At}$ 可以表示成关于 $A$ 的次数不超过 $1$ 的多项式．

> **解**　$\boxed{\times}$．$A$ 的特征多项式为 $\varphi_A(\lambda) = \lambda(\lambda-1)^2$，而 $\operatorname{rank}(A-I) = 2$ 表明 $A$ 的 Jordan 型为 $\operatorname{diag}(0, J_2(1))$，因此 $m_A(\lambda) = \varphi_A(\lambda)$，设 $f(\lambda) = \lambda \mathrm{e}^{\lambda t}$，有 $f(0) = 0$，$f(1) = \mathrm{e}^t$，$f'(1) = \mathrm{e}^t + t\mathrm{e}^t$．解得 $r(\lambda) = f(\lambda) \bmod m_A(\lambda) = t\mathrm{e}^t\lambda^2 + \mathrm{e}^t\lambda$，$\deg r(\lambda) = 2$． $\square$

&nbsp;

**题 4.48**　矩阵幂级数 $\sum_{k=1}^\infty {1\over k^2}\begin{bmatrix}-2&1&-1\\0&1&0\\1&1&0\end{bmatrix}^k$ 收敛．

> **解**　$\boxed{\surd}$．矩阵与其 Jordan 型 $\operatorname{diag}(1, J_2(-1))$ 相似，$J_2(-1)^k = \begin{bmatrix}-1&(-1)^{k+1}k \\0&-1\end{bmatrix}$，依 Leibniz 判别法知级数收敛． $\square$

&nbsp;

**题 4.49**　设 $A$ 是方阵，$I$ 是单位阵，则 $\sin(A+2\pi I) = \sin(A)$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.50**　若实矩阵 $A$ 满足 $A^\mathsf{T} = -A$，则 $\mathrm{e}^A$ 是正交矩阵．

> **解**　$\boxed{\surd}$．$(\mathrm{e}^A)^\mathsf{T} \mathrm{e}^A = \mathrm{e}^{A^\mathsf{T}} \mathrm{e}^A = \mathrm{e}^{A^\mathsf{T} + A} = \mathrm{e}^O = I$． $\square$

&nbsp;

**题 4.51**　设 4 阶方阵 $A$ 的 Jordan 标准型由两个 2 阶非零 Jordan 块构成，且 $A^2=O$，则 $\sin A = A$．

> **解**　$\boxed{\surd}$．$\sin\left(\begin{bmatrix}0 & 1 \\ 0 & 0\end{bmatrix}\right) = \begin{bmatrix}\sin(0) & \sin'(0) \\ 0 & \sin(0)\end{bmatrix} = \begin{bmatrix}0 & 1 \\ 0 & 0\end{bmatrix}$． $\square$

&nbsp;

**题 4.52**　设 $A = \begin{bmatrix}20&3&1\\2&10&2\\8&-1&0\end{bmatrix}$，则 $A$ 的所有特征值均为实数，且 $A$ 为可对角化矩阵．

> **解**　$\boxed{\surd}$．$G(A) \cap G(A^\mathsf{T})$ 中 $[20, 3, 1]$，$[3, 10, -1]^\mathsf{T}$，$[1, 2, 0]^\mathsf{T}$ 对应的 Gershgorin 圆盘不交． $\square$

&nbsp;

**题 4.53**　设 $A$ 是正规矩阵，则它的谱半径等于它的谱范数．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.54**　设 $A$ 是 $m\times n$ 矩阵，$P$ 是 $m$ 阶酉矩阵，则 $PA$ 和 $A$ 具有相同的奇异值．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.55**　矩阵幂级数 $\sum_{k=1}^\infty \begin{bmatrix}-1&0&1\\1&1&0\\-4&0&3\end{bmatrix}^k$ 收敛．

> **解**　$\boxed{\times}$．矩阵的 Jordan 型为 $J_3(1)$． $\square$

&nbsp;

**题 4.56**　设 $A$ 是复方阵，定义 $B = \begin{bmatrix}O & A \\ A^\mathsf{H} & O\end{bmatrix}$，则 $A$ 和 $B$ 的谱范数相等．

> **解**　$\boxed{\surd}$．计算可知：
> $$
>
> B^\mathsf{H} B = B^2 = \begin{bmatrix}AA^\mathsf{H} & O \\ O & A^\mathsf{H} A\end{bmatrix}
>
> $$
> 于是 $\lambda_{\max}(A^\mathsf{H} A) = \lambda_{\max}(AA^\mathsf{H}) = \lambda_{\max}(B^\mathsf{H} B)$． $\square$

&nbsp;

**题 4.57**　设 $A,B$ 都是实对称阵，$A$ 的所有特征值在区间 $[a,b]$ 内，$B$ 的所有特征值在区间 $[c,d]$ 内，那么 $A+B$ 的所有特征值在区间 $[a+c, b+d]$ 内．

> **解**　$\boxed{\surd}$．$A$ 的特征值在 $[a, b]$ 内，说明 $A - aI$ 半正定，$A - bI$ 半负定，对于 $B$ 同理．于是 $A+B-(a+c)I$ 作为两个半正定对称阵之和半正定，同理 $A+B-(b+d)I$ 半负定，即 $A+B$ 的特征值均在 $[a+c, b+d]$ 内． $\square$

&nbsp;

**题 4.58**　若 $A^3=A$，则 $A$ 的谱半径必为 $1$．

> **解**　$\boxed{\times}$．考虑 $A=O$． $\square$

&nbsp;

**题 4.59**　已知 $A = \begin{bmatrix}3&1&-1\\-2&0&2\\-1&-1&3\end{bmatrix}$，则 $\sin({\pi\over 4}A)$ 不是单位阵．

> **解**　$\boxed{\times}$．$A$ 的 Jordan 标准型为 $\operatorname{diag}(2, J_2(2))$，$\sin({\pi\over 4}\cdot 2) = 1$，$\sin'({\pi\over 4}\cdot 2) = 0$，因此 $\sin({\pi\over 4}A) = I$． $\square$

&nbsp;

**题 4.60**　若 $n$ 阶方阵 $A$ 的 $n$ 个盖尔圆互不相交，则 $A$ 是单纯矩阵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.61**　任何一种矩阵范数都有与之相容的向量范数．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.62**　若两个正规矩阵可交换，则它们的乘积也是正规矩阵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.63**　设 $A$ 是 3 阶复矩阵，定义 $\left\Vert A \right\Vert = \left(\sum_{i=1}^3\sum_{j=1}^3 |a_{ij}|^2\right)^{1\over 2}$，$AA^\mathsf{H}$ 的非零特征值分别为 $2, 3, 4$，则 $\left\Vert A \right\Vert = 3$．

> **解**　$\boxed{\surd}$．$\left\Vert A \right\Vert = \sqrt{\operatorname{tr}(AA^\mathsf{H})} = \sqrt{2+3+4} = 3$． $\square$

&nbsp;

**题 4.64**　已知 $A = \begin{bmatrix}1&-1&1\\\mathrm{i}&1+\mathrm{i}&1\\2&\mathrm{i}&3\end{bmatrix}$，则 $\left\Vert A \right\Vert_1 = 5$．

> **解**　$\boxed{\surd}$．$\left\Vert \cdot \right\Vert_1$ 为列和范数． $\square$

&nbsp;

**题 4.65**　已知 $A = \begin{bmatrix}1&2&2\\2&1&2\\2&2&1\end{bmatrix}$，则 $\rho(A) = 4$．

> **解**　$\boxed{\times}$．注意到 $A[1,1,1]^\mathsf{T} = [5,5,5]^\mathsf{T}$ 即知 $\rho(A) \geq 5$． $\square$

&nbsp;

**题 4.66**　设 $A = \begin{bmatrix}0.9&0.01&0.12\\0.01&0.8&0.13\\0.01&0.02&0.4\end{bmatrix}$，则 $A$ 的特征值均为实数．

> **解**　$\boxed{\surd}$．$G(A) \cap G(A^\mathsf{T})$ 中 $[0.9, 0.01, 0.01]^\mathsf{T}$，$[0.01, 0.8, 0.02]^\mathsf{T}$，$[0.01, 0.02, 0.4]$ 对应的 Gershgorin 圆盘不交． $\square$

&nbsp;

**题 4.67**　设 $A\in\mathbb{C}^{n\times n}$，则矩阵范数 $\left\Vert A \right\Vert_{v\infty} = n\max_{\substack{1\leq i\leq n\\1\leq j\leq n}}|a_{ij}|$ 与向量的 $1$–范数相容．

> **解**　$\boxed{\surd}$．
> $$
>
> \begin{aligned}
> \left\Vert Ax \right\Vert_1 &= \sum_{1\leq i\leq n} |(Ax)_i| \\
> &= \sum_{1\leq i\leq n} \left|\sum_{1\leq j\leq n} a_{ij} x_j\right| \\
> &\leq \sum_{1\leq i\leq n} \sum_{1\leq j\leq n} |a_{ij}| |x_j| \\
> &\leq \sum_{1\leq i\leq n} \max_{1\leq j\leq n} |a_{ij}| \left\Vert x \right\Vert_1 \\
> &\leq n\max_{\substack{1\leq i\leq n\\1\leq j\leq n}}|a_{ij}| \cdot \left\Vert x \right\Vert_1
> \end{aligned}
>
> $$
> $\square$

&nbsp;

**题 4.68**　设 $y(t) = [y_1(t), \dots, y_n(t)]^\mathsf{T}$，则 ${\mathrm{d}\over\mathrm{d} t}\left\Vert y \right\Vert_2^2 = 2y^\mathsf{T}{\mathrm{d} y\over\mathrm{d} t}$．

> **解**　$\boxed{\surd}$．
> $$
>
> {\mathrm{d}\over\mathrm{d} t}\left\Vert y \right\Vert_2^2 = {\mathrm{d}\over \mathrm{d} t}\left(\sum_{i} y_i^2(t)\right) = \sum_{i} 2y_i(t){\mathrm{d} y_i(t)\over \mathrm{d} t} = 2y^\mathsf{T}{\mathrm{d} y\over\mathrm{d} t}
>
> $$
> $\square$

&nbsp;

**题 4.69**　设 $X$ 是 $n$ 阶矩阵变量，且其行列式 $|X|\neq 0$，则 ${\mathrm{d} \over \mathrm{d} X^\mathsf{T}} |X^{-1}| = -{1\over |X|}X^{-1}$

> **解**　$\boxed{\surd}$．设 $X = (x_{ij}) \in \mathbb{C}^{n\times n}$，首先有
> $$
>
> {\mathrm{d} \over \mathrm{d} X}|X| = \begin{bmatrix}
> {\partial|X|\over\partial x_{11}} & \cdots & {\partial|X|\over\partial x_{1n}} \\
> \vdots & \ddots & \vdots \\
> {\partial|X|\over\partial x_{n1}} & \cdots & {\partial|X|\over\partial x_{nn}}\end{bmatrix}
>
> $$
> 考虑 $|X|$ 的按行展开 $|X| = \sum_{j} x_{ij}A_{ij}$，其中 $A_{ij}$ 为代数余子式．两侧取偏导即有 ${\partial |X| \over \partial x_{ij}} = A_{ij}$．于是
> $$
>
> {\mathrm{d} \over \mathrm{d} X}|X| = \begin{bmatrix}A_{11} & \cdots & A_{1n} \\ \vdots & \ddots & \vdots \\ A_{n1} & \cdots & A_{nn}\end{bmatrix} = (X^{\ast})^\mathsf{T}
>
> $$
> 利用以上结论可得
> $$
>
> {\mathrm{d}\over\mathrm{d} X^\mathsf{T}}|X^{-1}|
> = {\mathrm{d}\over\mathrm{d} X^\mathsf{T}}{1\over |X|}
> = -{1\over |X|^2}{\mathrm{d}\over\mathrm{d} X^\mathsf{T}}|X|
> = -{1\over |X|^2}X^{\ast}
> = -{1\over |X|^2}|X|X^{-1}
> = -{1\over |X|}X^{-1}
>
> $$
> $\square$

&nbsp;

**题 4.70**　已知 $A = \begin{bmatrix}3&1&-1\\-2&0&2\\-1&-1&3\end{bmatrix}$，则 $\sin({\pi\over 4}A)$ 是单位阵．

> **解**　$\boxed{\surd}$．这题可以和题 4.59 打一架． $\square$

&nbsp;

**题 4.71**　如果 $x = [x_1, \dots, x_n]^\mathsf{T}\in\mathbb{C}^n$，则 $X = n\max_{1\leq i\leq n}|x_i|$ 是向量范数．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.72**　矩阵 $A = \begin{bmatrix}0&0&1&0\\1&4&0&1\\1&0&6&2\\0&1&1&8\end{bmatrix}$ 至少有 2 个实特征值．

> **解**　$\boxed{\surd}$．Gershgorin 圆盘 $G(A)\cap G(A^\mathsf{T})$ 中有一个独立圆盘，给出 $A$ 的一个实特征值．而 $A$ 的复特征值成对出现，因此必有另一个实特征值，即 $A$ 至少有两个实特征值． $\square$

&nbsp;

**题 4.73**　若设 $x\in\mathbb{R}^n$，则 $\left\Vert x \right\Vert_2 \leq \left\Vert x \right\Vert_1 \leq \sqrt n\left\Vert x \right\Vert_2$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.74**　给定 $\mathbb{C}^{n\times n}$ 中的矩阵范数 $\left\Vert \cdot \right\Vert$，选取可逆阵 $P$，使得 $\left\Vert P \right\Vert = 1$．对于 $A\in\mathbb{C}^{n\times n}$，定义实数 $\left\Vert A \right\Vert_M = \left\Vert AP^{-1} \right\Vert$，则 $\left\Vert A \right\Vert_M$ 是 $\mathbb{C}^{n\times n}$ 中的矩阵范数．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.75**　设矩阵 $A = \begin{bmatrix}1&2&3&4\\2&1&3&4\\3&2&1&4\\4&2&3&1\end{bmatrix}$，则 $A$ 的谱半径为 $10$．

> **解**　$\boxed{\surd}$．由 Gershgorin 圆盘判定 $A$ 的特征值 $\lambda$ 满足 $|\lambda - 1| \leq 9$，并注意到 $A[1,1,1,1]^\mathsf{T} = [10,10,10,10]^\mathsf{T}$，即知 $\rho(A) = 10$． $\square$

&nbsp;

**题 4.76**　已知 $A = \begin{bmatrix}0.1&0.3\\0.7&0.6\end{bmatrix}$，则矩阵幂级数 $\sum_{k=0}^\infty A^k$ 收敛．

> **解**　$\boxed{\surd}$．可由 Gershgorin 圆盘判定 $\rho(A) < 1$． $\square$

&nbsp;

**题 4.77**　设 $\left\Vert \cdot \right\Vert_2$ 为从属于向量范数 $\left\Vert x \right\Vert_2$ 的算子范数，$H=E-2uu^\mathsf{H}$，其中 $\left\Vert u \right\Vert_2=1$，则 $\left\Vert H \right\Vert_2=1$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.78**　给定 $\mathbb{C}^{n\times n}$ 中的矩阵范数 $\left\Vert \cdot \right\Vert_F$ 与 $\left\Vert \cdot \right\Vert_2$，对于 $A\in\mathbb{C}^{n\times n}$，定义实数 $\left\Vert A \right\Vert = \left\Vert A \right\Vert_F + 2\left\Vert A \right\Vert_2$，则 $\left\Vert A \right\Vert$ 是 $\mathbb{C}^{n\times n}$ 中的矩阵范数．

> **解**　$\boxed{\surd}$．正定性与齐次性显然，对于三角不等式：
> $$
>
> \begin{aligned}
> \left\Vert A+B \right\Vert &= \left\Vert A+B \right\Vert_F + 2\left\Vert A+B \right\Vert_2 \\
> &\leq \left\Vert A \right\Vert_F + \left\Vert B \right\Vert_F + 2(\left\Vert A \right\Vert_2 + \left\Vert B \right\Vert_2) \\
> &= \left\Vert A \right\Vert + \left\Vert B \right\Vert
> \end{aligned}
>
> $$
> 对于相容性：
> $$
>
> \begin{aligned}
> \left\Vert AB \right\Vert &= \left\Vert AB \right\Vert_F + 2\left\Vert AB \right\Vert_2 \\
> &\leq \left\Vert A \right\Vert_F\left\Vert B \right\Vert_F + 2\left\Vert A \right\Vert_2\left\Vert B \right\Vert_2 \\
> &\leq (\left\Vert A \right\Vert_F + 2\left\Vert A \right\Vert_2)(\left\Vert B \right\Vert_F + 2\left\Vert B \right\Vert_2) \\
> &= \left\Vert A \right\Vert\left\Vert B \right\Vert
> \end{aligned}
>
> $$
> $\square$

&nbsp;

**题 4.79**　矩阵幂级数 $\sum_{k=0}^\infty {k\over 6^k}\begin{bmatrix}1&-8\\-2&1\end{bmatrix}^k$ 绝对收敛．

> **解**　$\boxed{\surd}$．与题 4.31 一致． $\square$

&nbsp;

**题 4.80**　已知 $A = \begin{bmatrix}1&0&\mathrm{i}\\0&1&2\\-\mathrm{i}&2&5\end{bmatrix}$，则 $\left\Vert A \right\Vert_1 = 8$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 4.81**　已知 $A = \begin{bmatrix}1&0&\mathrm{i}\\0&1&2\\-\mathrm{i}&2&5\end{bmatrix}$，则 $\left\Vert A \right\Vert_F = 37$．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 4.82**　已知 $A = \begin{bmatrix}1&{1\over 2}&{1\over 3}\\1&2&{1\over 2}\\{1\over 2}&1&2\mathrm{i}\end{bmatrix}$，$x = \begin{bmatrix}1\\0\\1\end{bmatrix}$，则 $\left\Vert Ax \right\Vert_\infty = {\sqrt{17}\over 2}$．

> **解**　$\boxed{\surd}$．$Ax = \begin{bmatrix}{4\over 3} \\ {3\over 2} \\ {1\over 2} + 2\mathrm{i}\end{bmatrix}$． $\square$

&nbsp;

**题 4.83**　矩阵级数 $\sum_{k=1}^\infty {1\over k^2}\begin{bmatrix}1&7\\-1&-3\end{bmatrix}^k$ 收敛．

> **解**　$\boxed{\times}$．矩阵的特征值为 $1\pm\sqrt 3\mathrm{i}$，模为 $2$，而级数的收敛半径为 $1$． $\square$

&nbsp;

**题 4.84**　设 $\left\Vert x \right\Vert_a$ 与 $\left\Vert x \right\Vert_b$ 是 $\mathbb{C}^n$ 上的两种范数，则 $\max(\left\Vert x \right\Vert_a, \left\Vert x \right\Vert_b)$ 也是 $\mathbb{C}^n$ 上的范数．

> **解**　$\boxed{\surd}$．正定性与齐次性显然，对于三角不等式：
> $$
>
> \begin{aligned}
> \left\Vert x+y \right\Vert &= \max\left\{ \left\Vert x+y \right\Vert_a, \left\Vert x+y \right\Vert_b \right\} \\
> &\leq \max\left\{ \left\Vert x \right\Vert_a + \left\Vert y \right\Vert_a, \left\Vert x \right\Vert_b + \left\Vert y \right\Vert_b \right\} \\
> &\leq \max\left\{ \left\Vert x \right\Vert_a, \left\Vert x \right\Vert_b \right\} + \max\left\{ \left\Vert y \right\Vert_a, \left\Vert y \right\Vert_b \right\} \\
> &= \left\Vert x \right\Vert + \left\Vert y \right\Vert
> \end{aligned}
>
> $$
> $\square$

&nbsp;

**题 4.85**　设 $A\in\mathbb{C}^{n\times n}$ 的特征值分别为 $\lambda_1, \dots, \lambda_n$，则 $\left\Vert A \right\Vert_F^2 \geq |\lambda_1|^2 + \dots + |\lambda_n|^2$．

> **解**　$\boxed{\surd}$．这与题 4.17 一致． $\square$

&nbsp;

**题 4.86**　设 $f(A) = \left\Vert A \right\Vert_F^2 = \operatorname{tr}(A^\mathsf{T} A)$，其中 $A\in\mathbb{R}^{n\times n}$ 是矩阵变量，则 ${\mathrm{d} f\over \mathrm{d} A} = $ $\underline{\qquad}$．

1. $A$
2. $2A$
3. $A^\mathsf{T} A$
4. $AA^\mathsf{T}$

> **解**　$\boxed{\text{(2)}}$．首先有
> $$
>
> {\partial \over \partial A_{ij}}\operatorname{tr}(AB) = {\partial \over \partial A_{ij}}\sum_{x} \sum_{y} A_{xy}B_{yx} = B_{ji}
>
> $$
> 因此
> $$
>
> {\partial \over \partial A}\operatorname{tr}(AB) = {\partial \over \partial A}\operatorname{tr}(BA) = B^\mathsf{T}
>
> $$
> 从而有
> $$
>
> \mathrm{d} \operatorname{tr}(A^\mathsf{T} A) = A\,\mathrm{d} A + A^\mathsf{T}\,\mathrm{d} A^\mathsf{T} = 2A\,\mathrm{d} A
>
> $$
> 即 ${\partial\over\partial A}\operatorname{tr}(A^\mathsf{T} A) = 2A$． $\square$

&nbsp;

**题 4.87**　设 $A\in\mathbb{C}^{n\times n}$，下列各式不成立的是：

1. $\left\Vert A \right\Vert_2 = \left\Vert A^\mathsf{H} \right\Vert_2$
2. $\left\Vert A^\mathsf{H} A \right\Vert_2 = \left\Vert A \right\Vert_2^2$
3. $\left\Vert A \right\Vert_2 = \max_{\left\Vert x \right\Vert_2 = \left\Vert y \right\Vert_2 = 1} |y^\mathsf{H} A x|$
4. $\left\Vert A \right\Vert_2^2 \geq \left\Vert A \right\Vert_1\left\Vert A \right\Vert_\infty$

> **解**　$\boxed{\text{(4)}}$．对于 (3)，有
> $$
>
> \begin{aligned}
> \max_{\left\Vert x \right\Vert_2 = \left\Vert y \right\Vert_2 = 1} |y^\mathsf{H} A x|
> &= \max_{\left\Vert x \right\Vert_2 = 1} \left|{x^\mathsf{H} A^\mathsf{H} \over \left\Vert Ax \right\Vert_2} A x\right| \\
> &= \max_{\left\Vert x \right\Vert_2 = 1} {1\over \left\Vert Ax \right\Vert_2} \left\Vert Ax \right\Vert_2^2 \\
> &= \left\Vert A \right\Vert_2
> \end{aligned}
>
> $$
> $\square$

&nbsp;

**题 4.88**　设 $A\in\mathbb{C}^{n\times n}$，且 $A$ 的所有列的模值之和都相等，则 $\rho(A) = \left\Vert A \right\Vert_1$．

> **解**　$\boxed{\times}$．考虑 $A = \begin{bmatrix}1&\mathrm{i}\\\mathrm{i}&1\end{bmatrix}$，有 $\left\Vert A \right\Vert_1 = 2$，但 $A$ 的特征值为 $1\pm\mathrm{i}$，$\rho(A) = \sqrt 2$． $\square$

&nbsp;

**题 4.89**　若矩阵 $A = \begin{bmatrix}1&7\\6&-1\end{bmatrix}$，则矩阵函数 $\mathrm{e}^A$ 的行列式为 $\mathrm{e}^{-43}$．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 4.90**　设 5 阶实对称矩阵 $A$ 满足 $(A-3I)^2(A+5I)^3=O$，则以下说法正确的是：

1. $A$ 的特征多项式为 $(\lambda-3)^2(\lambda+5)^3$．
2. $A$ 的最小多项式为 $(\lambda-3)(\lambda+5)$．
3. $A$ 的谱半径是 $5$．
4. $A$ 的谱半径是 $3$ 或 $5$．

> **解**　$\boxed{\text{(4)}}$．$A$ 作为实对称阵必然可对角化，于是 $A$ 的最小多项式是 $(\lambda-3)(\lambda+5)$ 的因式． $\square$
