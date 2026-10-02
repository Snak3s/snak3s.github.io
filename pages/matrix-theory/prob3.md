### 矩阵分解 习题

**题 3.1**　下列命题不是 $n$ 阶 Hermite 矩阵 $A$ 为正定阵的充要条件的是：

1. $A$ 的特征值都大于零．
2. 存在可逆阵 $P$，使得 $A = P^\mathsf{H} P$．
3. $A$ 酉相似于对角阵．
4. $A$ 的所有顺序主子式都大于零．

> **解**　$\boxed{\text{(3)}}$． $\square$

&nbsp;

**题 3.2**　下列命题不是 $n$ 阶复方阵 $A$ 可相似于对角阵的充要条件的是：

1. $A$ 有 $n$ 个线性无关的特征向量．
2. $A$ 的所有特征值的代数重数与几何重数相等．
3. $A$ 是正规阵．
4. $A$ 的最小多项式没有重根．

> **解**　$\boxed{\text{(3)}}$．正规矩阵比单纯矩阵条件更强：正规矩阵要求酉相似于对角阵． $\square$

&nbsp;

**题 3.3**　设两个四阶复矩阵 $A$ 与 $B$ 的最小多项式分别为 $x^2(x-1)$ 与 $x(x-1)$，则矩阵 $\operatorname{diag}(A^{\ast}, B)$ 的 Jordan 标准型所包含 Jordan 块的个数为$\underline{\qquad}$．

> **解**　首先 $B$ 必然可对角化，$B$ 包含 $4$ 个 Jordan 块．接下来考虑 $A$，其 Jordan 标准型必然包含 Jordan 块 $J_2(0)$ 与 $1$，剩余一个 Jordan 块可为 $0$ 也可为 $1$，因此有以下两种可能：
>
> $$
> A_1 \sim \operatorname{diag}(J_2(0), 0, 1), \quad A_2 \sim \operatorname{diag}(J_2(0), 1, 1)
> $$
>
> 对于 $A_1$，有 $\operatorname{rank}(A_1)=n-2 \implies A_1^{\ast} = O$，因此 $A_1^{\ast}$ 的 Jordan 标准型包含 $4$ 个 Jordan 块．对于 $A_2$，有 $\operatorname{rank}(A_2) = n-1 \implies \operatorname{rank}(A_2^{\ast}) = 1$，并且这非零元素不在 $A_2^{\ast}$ 的对角线上，可以知道 $A_2^{\ast}$ 的 Jordan 标准型包含 $3$ 个 Jordan 块．综上，$\operatorname{diag}(A^{\ast}, B)$ 的 Jordan 标准型包含 Jordan 块的个数为$\boxed{7\text{ 或 }8}$． $\square$

&nbsp;

**题 3.4**　$M = \begin{bmatrix}2&-1&-1\\-1&-1&2\\-1&2&-1\end{bmatrix}$，则 $M$ 不存在：

1. QR 分解
2. 满秩分解
3. 奇异值分解
4. 谱分解

> **解**　$\boxed{\text{(1)}}$．$M$ 不满秩，QR 分解的 $R$ 不为正线上三角矩阵． $\square$

&nbsp;

**题 3.5**　设 $A = \begin{bmatrix}1&0&0\\1&0&0\\1&0&0\end{bmatrix}$，则 $A^{200} - A^{199} = $ $\underline{\qquad}$．

> **解**　注意到 $A^2 = A$，因此 $A^{200} - A^{199} = \boxed{O}$． $\square$

&nbsp;

**题 3.6**　$n$ 阶（$n\geq 2$）实奇异矩阵 $A$ 的特征多项式与最小多项式相等，则 $A$ 的伴随矩阵列空间的维数为$\underline{\qquad}$．

> **解**　奇异矩阵意味着 $\operatorname{rank} A < n$．特征多项式与最小多项式相等，意味着 Jordan 标准型中任一特征值仅有一个 Jordan 块，而只有特征值 $0$ 的 Jordan 块非满秩，并且 $\operatorname{rank} J_k(0) = k - 1$．由于特征值 $0$ 的 Jordan 块仅有一个，因此 $\operatorname{rank} A = n-1$，$\operatorname{rank} A^{\ast} = 1$，$\dim R(A^{\ast}) = \boxed{1}$． $\square$

&nbsp;

**题 3.7**　已知三阶矩阵 $A$ 的特征多项式为 $\varphi(\lambda) = |\lambda I - A| = \lambda^3 - 4\lambda^2 + 5\lambda - 2$，则 $A^{-1}$ 等于$\underline{\qquad}$．

> **解**　依 Hamilton–Cayley 定理，$\varphi(\lambda)$ 是 $A$ 的零化多项式，因此
>
> $$
> A^3 - 4A^2 + 5A - 2I = O \implies {1\over 2}A(A^2 - 4A + 5I) = I
> $$
>
> 即可得到 $A^{-1} = \boxed{ {1\over 2}(A^2 - 4A + 5I)}$． $\square$

&nbsp;

**题 3.8**　已知矩阵 $A = \begin{bmatrix}-2&-2&1\\2&x&-2\\0&0&-2\end{bmatrix}$ 与 $B = \begin{bmatrix}2&1&0\\0&-1&0\\0&0&y\end{bmatrix}$ 相似，则 $x = $ $\underline{\qquad}$，$y = $ $\underline{\qquad}$．

> **解**　众所周知，确定二元一次方程组的解需要两个线性无关的方程．考虑 $\operatorname{tr} A = \operatorname{tr} B$ 以及 $\det A = \det B$，可以得到：
>
> $$
> \begin{cases}
> \operatorname{tr} A = \operatorname{tr} B & \implies x-4 = y+1 \\
> \det A = \det B & \implies 4x-8 = -2y
> \end{cases}
> $$
>
> 解得 $\boxed{x=3, y=-2}$． $\square$

&nbsp;

**题 3.9**　若 $A\in\mathbb{C}^{n\times n}$ 是 Hermite 负定矩阵，则以下说法正确的是：（多选）

1. $A$ 有 $n$ 个负实数特征值．
2. $A^\mathsf{H} A$ 是 Hermite 负定矩阵．
3. $A$ 酉相似于单纯矩阵．
4. 存在可逆矩阵 $G$ 使得 $A = G^2$．

> **解**　$\boxed{\text{(1)(3)(4)}}$．对于 (2)，考察 $x^\mathsf{H} A^\mathsf{H} A x = (Ax)^\mathsf{H} (Ax)$ 是标准内积，因此 $A^\mathsf{H} A$ 是 Hermite 半正定阵．对于 (4)，$\sqrt x$ 在非零处导数存在，由 $A$ 满秩知 $G = \sqrt A$ 存在且满秩． $\square$

&nbsp;

**题 3.10**　若 $A\in\mathbb{C}^{n\times n}$ 满足 $A^2=A$，则以下说法正确的是：（多选）

1. $A$ 是单纯矩阵．
2. $\operatorname{rank} A = \operatorname{tr} A$．
3. 若 $x\in\mathbb{R}(A)$，则 $x = Ax$．
4. $\dim N(A) + \dim N(I-A) = n$．

> **解**　$\boxed{\text{(1)(2)(3)(4)}}$．结合 $A$ 是*投影矩阵*的性质考虑． $\square$

&nbsp;

**题 3.11**　设 $A\in\mathbb{C}^{m\times n}$，$B\in\mathbb{C}^{n\times m}$，则以下说法正确的是：（多选）

1. $AB$ 与 $BA$ 具有相同的非零特征值．
2. $AB$ 与 $BA$ 的秩相同．
3. 若 $A, B$ 均为单纯矩阵，则 $AB=BA$ 的充要条件是存在可逆阵 $P$ 使得 $P^{-1}AP$ 与 $P^{-1}BP$ 均为对角阵．
4. 若 $AB=BA$ 且 $x$ 为 $A$ 的特征向量，则 $Bx$ 必为 $A$ 的特征向量．

> **解**　$\boxed{\text{(1)(3)}}$．对于 (2)(4)，参考题 2.6．对于 (3)，我们有以下定理． $\square$

> **定理 3.1**　若 $A, B\in \mathbb{C}^{n\times n}$ 可对角化，则 $A, B$ 乘法可交换当且仅当 $A, B$ 可同时对角化（simultaneously diagonalizable）．

**证**　（$\Longleftarrow$） 设可逆阵 $P$ 满足 $P^{-1}AP$ 与 $P^{-1}BP$ 均为对角阵，而对角阵可交换，于是

$$
AB = P(P^{-1}AP)(P^{-1}BP)P^{-1} = P(P^{-1}BP)(P^{-1}AP)P^{-1} = BA
$$

（$\Longrightarrow$） 首先容易验证 $\mathcal A$ 的特征子空间 $V_\lambda$ 是 $\mathcal B$ 的不变子空间．$\mathcal B$ 可对角化，因此 $\mathcal B$ 的最小多项式 $m_B(\lambda)$ 无重根．考虑 $\mathcal B |_{V_\lambda}$，显然有 $m_B(\mathcal B |_{V_\lambda}) = \mathcal O$，这表明 $\mathcal B|_{V_\lambda}$ 的最小多项式作为 $m_B(\lambda)$ 的因式无重根，因此 $\mathcal B |_{V_\lambda}$ 在 $V_\lambda$ 上可对角化．存在 $V_\lambda$ 的一组基，使得 $\mathcal B|_{V_\lambda}$ 在这组基下是对角的．$\mathcal A$ 的所有特征子空间对应的基的并，即是 $V$ 的一组基，且 $\mathcal A$ 与 $\mathcal B$ 在这组基下均是对角的． $\square$

&nbsp;

**题 3.12**　关于 $A\in\mathbb{C}^{n\times n}$ 的说法正确的是：（多选）

1. 若 $A$ 是正交矩阵，则 $A$ 必是单纯矩阵且 $A$ 的特征值均为实数．
2. 若 $A$ 是正规矩阵，则 $A$ 的特征向量必两两正交．
3. 若 $A$ 是正定 Hermite 阵，则 $A$ 的所有特征值均为正实数．
4. 若 $A$ 是正交投影矩阵，则 $N(A-I)$ 是 $N(A)$ 的正交补空间．

> **解**　$\boxed{\text{(3)(4)}}$．对于 (1)，正交矩阵的特征值不一定为实数，可以参考正交相似标准型．对于 (2)，属于不同特征值的特征向量两两正交． $\square$

&nbsp;

**题 3.13**　矩阵 $A = \begin{bmatrix}1&0&0\\2&0&0\end{bmatrix}$ 的非零奇异值为$\underline{\qquad}$．

> **解**　首先计算得到 $A^\mathsf{H} A = \operatorname{diag}(5, 0, 0)$，则 $A^\mathsf{H} A$ 的特征值为 $5, 0, 0$，$A$ 的奇异值为 $A^\mathsf{H} A$ 特征值的平方根，即 $\sqrt 5, 0, 0$．所以 $A$ 的非零奇异值为 $\boxed{\sqrt 5}$． $\square$

&nbsp;

**题 3.14**　已知三阶矩阵 $A$ 的不变因子为 $d_1(\lambda) = 1$，$d_2(\lambda) = \lambda$，$d_3(\lambda) = \lambda(\lambda - 2)$，则 $A$ 的初等因子为$\underline{\qquad}$．

> **解**　$\boxed{\lambda, \lambda, \lambda - 2}$． $\square$

&nbsp;

**题 3.15**　设二阶复矩阵 $A, B, A-B$ 均为投影矩阵，则 $AB = BA =$ $\underline{\qquad}$．

> **解**　由 $A - B$ 为投影矩阵，可知 $A - B = (A-B)^2 = A^2 - AB - BA + B^2 = A + B - AB - BA$，即有 $2B = AB + BA$．因此 $AB = BA = \boxed{B}$． $\square$

&nbsp;

**题 3.16**　设 $A$ 是幂等矩阵，则下列命题中不正确的是：

1. $A$ 与对角矩阵相似．
2. $A$ 的特征值只可能是 $1$ 或 $0$．
3. $\operatorname{tr} A = \operatorname{rank} A$．
4. 幂级数 $\sum_{k=0}^{\infty} A^k = (E-A)^{-1}$．

> **解**　$\boxed{\text{(4)}}$．$\sum_{k=0}^\infty A^k = I + \sum_{k>0} A$ 不收敛． $\square$

&nbsp;

**题 3.17**　设 $A\in\mathbb{C}^{n\times n}$，则 $A^n, A^{n-1}, \dots, A, I$ 一定线性相关．

> **解**　$\boxed{\surd}$．这是 Hamilton–Cayley 定理的推论． $\square$

&nbsp;

**题 3.18**　设 $A = \begin{bmatrix}1&0&0\\1&0&0\\1&0&0\end{bmatrix}$，则 $A^{198} + A^{188} = $ $\underline{\qquad}$．

> **解**　注意到 $A^2 = A$，因此 $A^{198} + A^{188} = \boxed{2A}$． $\square$

&nbsp;

**题 3.19**　设三阶矩阵 $A$ 满足 $(A^2-4I)^2(A-3I)^2=0$，且其最小多项式 $m(1)=m(3)=1$，则 $A$ 相似于：

1. $A = \begin{bmatrix}2&1&1\\0&3&1\\0&0&-2\end{bmatrix}$
2. $A = \begin{bmatrix}2&0&0\\0&2&2\\0&0&2\end{bmatrix}$
3. $A = \begin{bmatrix}-2&0&0\\0&-2&2\\0&0&-2\end{bmatrix}$
4. $A = \begin{bmatrix}2&2&0\\0&2&2\\0&0&2\end{bmatrix}$

> **解**　$A$ 的最小多项式 $m(\lambda) | (\lambda^2 - 4)^2(\lambda - 3)^2$，而 $m(3) \neq 0$，因此 $m(\lambda) | (\lambda^2-4)^2 = (\lambda+2)^2(\lambda-2)^2$．验证可知 $m(\lambda) = (\lambda - 2)^2$，因此 $A$ 相似于 $\boxed{\text{(2)}}$． $\square$

&nbsp;

**题 3.20**　设 $A = \begin{bmatrix}1&2&0\\2&1&0\\-2&\alpha&3\end{bmatrix}$，若 $A$ 可对角化，则 $\alpha$ 取何值？

> **解**　左上角的二阶矩阵对应了两个特征值分别为 $-1, 3$ 的特征向量，第三行需要特征值为 $3$ 的特征向量，因此需要 $\operatorname{rank} (A-3I) = 1$ 以确保 $A$ 能给出特征值为 $3$ 的两个线性无关特征向量．可得 $\alpha = \boxed{2}$． $\square$

&nbsp;

**题 3.21**　设 $n$ 阶矩阵 $A$ 满足 $A^n = I$，则以下说法正确的是：

1. $A$ 的最小多项式与特征多项式相同．
2. $A$ 不可以对角化．
3. $A$ 的 Jordan 标准型有 $n$ 个 Jordan 块．
4. $A$ 可能可以对角化，也可能不可以对角化．

> **解**　$\boxed{\text{(3)}}$． $\square$

&nbsp;

**题 3.22**　设 $A,B$ 都是 $n$ 阶对称正定阵，则以下说法正确的是：

1. $A+B$ 和 $AB$ 都是对称正定阵．
2. $A+B$ 和 $AB$ 都不是对称正定阵．
3. $A+B$ 一定是对称正定阵，$AB$ 不一定是对称正定阵．
4. $A+B$ 不一定是对称正定阵，$AB$ 一定是对称正定阵．

> **解**　$\boxed{\text{(3)}}$．事实上有以下定理． $\square$

> **定理 3.2**　正定阵 $A, B$ 的乘积 $AB$ 为正定阵，当且仅当 $A, B$ 可交换，即 $AB=BA$．

&nbsp;

**题 3.23**　两矩阵相似的充分必要条件是：

1. 两矩阵的特征值完全相同．
2. 两矩阵的特征向量完全相同．
3. 两矩阵的特征矩阵等价．
4. 两矩阵的特征矩阵相同．

> **解**　$\boxed{\text{(3)}}$． $\square$

&nbsp;

**题 3.24**　设 $a$ 是非零 $n$ 维实向量，$A=aa^\mathsf{T}$，那么：

1. $A$ 有左逆但无右逆．
2. $A$ 有右逆但无左逆．
3. $A$ 既有左逆又有右逆．
4. $A$ 既无左逆又无右逆．

> **解**　$\boxed{\text{(4)}}$．$A\in\mathbb{R}^{n\times n}_1$． $\square$

&nbsp;

**题 3.25**　$A$ 是单纯矩阵的充要条件是：

1. $A$ 的特征矩阵的初等因子都是一次的．
2. $A$ 的 Jordan 标准型中只有一个 Jordan 块．
3. $A$ 的最小多项式是一次的．
4. $A$ 的行列式因子都是一次的．

> **解**　$\boxed{\text{(1)}}$． $\square$

&nbsp;

**题 3.26**　下列矩阵中不一定是正规矩阵的是：

1. $A=A^\mathsf{H}$
2. $A^\mathsf{T}=A^{-1}$
3. $AA^\mathsf{H}$
4. $A=-A^\mathsf{H}$

> **解**　$\boxed{\text{(2)}}$． $\square$

&nbsp;

**题 3.27**　设 $A\in\mathbb{C}^{m\times n}$，则下列说法正确的有：（多选）

1. $\operatorname{rank} A = \operatorname{rank}(A^\mathsf{H} A) = \operatorname{rank}(AA^\mathsf{H})$．
2. $A^\mathsf{H} A$ 与 $AA^\mathsf{H}$ 的特征值均为非负实数．
3. $A^\mathsf{H} A$ 与 $AA^\mathsf{H}$ 的非零特征值相同．
4. $A^\mathsf{H} A$ 与 $AA^\mathsf{H}$ 的特征向量相同．

> **解**　$\boxed{\text{(1)(2)(3)}}$． $\square$

&nbsp;

**题 3.28**　设 $A,B$ 均为正规矩阵，且有 $AB=BA$，下列说法正确的有：（多选）

1. $A,B$ 至少有一个公共的特征向量．
2. $A,B$ 可同时酉相似于上三角矩阵．
3. $A,B$ 可同时酉相似于对角矩阵．
4. $AB$ 与 $BA$ 均为正规矩阵．

> **解**　$\boxed{\text{(1)(2)(3)(4)}}$． $\square$

&nbsp;

**题 3.29**　设 $A$ 是 $m\times n$ 阶复矩阵，有满秩分解 $A = BC$，则以下等式成立的是：（多选）

1. $N(A) = N(B)$
2. $N(A) = N(C)$
3. $N(A^\mathsf{H}) = N(B^\mathsf{H})$
4. $N(A^\mathsf{H}) = N(C^\mathsf{H})$

> **解**　$\boxed{\text{(2)(3)}}$．设 $\operatorname{rank} A = r$，由于 $B$ 列满秩，因此对 $0\neq x\in \mathbb{C}^r$ 均有 $Bx \neq 0$．因此对于 $y\in\mathbb{C}^n$，$Ay=0 \implies Cy=0$，从而 $N(A) = N(C)$．取共轭对称有 $A^\mathsf{H} = C^\mathsf{H} B^\mathsf{H}$，类似可得 $N(A^\mathsf{H}) = N(B^\mathsf{H})$． $\square$

&nbsp;

**题 3.30**　设 $A$ 是 $m\times n$ 阶复矩阵，有满秩分解 $A = BC$，则以下等式成立的是：（多选）

1. $R(A) = R(B)$
2. $R(A) = R(C)$
3. $R(A^\mathsf{H}) = R(B^\mathsf{H})$
4. $R(A^\mathsf{H}) = R(C^\mathsf{H})$

> **解**　$\boxed{\text{(1)(4)}}$． $\square$

&nbsp;

**题 3.31**　已知秩为 $r$ 的 $n$ 阶复方阵 $A$ 满足 $A^2=A$，则以下说法正确的是：（多选）

1. $A$ 的特征值只能是 $0$ 或 $1$．
2. $A$ 一定是单纯矩阵．
3. 若 $r = n$，则 $A$ 是单位矩阵．
4. $A$ 的迹等于 $r$．

> **解**　$\boxed{\text{(1)(2)(3)(4)}}$． $\square$

&nbsp;

**题 3.32**　已知矩阵 $A = \begin{bmatrix}3&a&b\\0&3&c\\0&0&2\end{bmatrix}$，则 $A$ 的 Jordan 块可能有多少个？（多选）

1. 1
2. 2
3. 3
4. 4

> **解**　$\boxed{\text{(2)(3)}}$．$A$ 有一重特征值 $2$ 与二重特征值 $3$，Jordan 标准型可能为 $\operatorname{diag}(2, 3, 3)$ 或 $\operatorname{diag}(2, J_2(3))$． $\square$

&nbsp;

**题 3.33**　下列哪些方阵一定可以酉相似对角化？

1. 正规矩阵
2. 幂等矩阵
3. 严格对角占优矩阵
4. Householder 矩阵

> **解**　$\boxed{\text{(1)(4)}}$． $\square$

&nbsp;

**题 3.34**　设 $A = \begin{bmatrix}a&1&1\\0&a&1\\0&0&a\end{bmatrix}$，则下列选项中与 $A$ 相似的矩阵有$\underline{\qquad}$，其中 $\varepsilon\neq 0$．（多选）

1. $\begin{bmatrix}a&\varepsilon&0\\0&a&1\\0&0&a\end{bmatrix}$
2. $\begin{bmatrix}a&\varepsilon&0\\0&a&\varepsilon\\0&0&a\end{bmatrix}$
3. $\begin{bmatrix}a&0&0\\\varepsilon&a&0\\0&\varepsilon&a\end{bmatrix}$
4. $\begin{bmatrix}a&0&0\\\varepsilon&a&0\\0&0&a\end{bmatrix}$

> **解**　$\boxed{\text{(1)(2)(3)}}$．$A$ 以及 (1)(2)(3) 给出的矩阵都与 $J_3(a)$ 相似，而 (4) 与 $\operatorname{diag}(J_2(a), a)$ 相似． $\square$

&nbsp;

**题 3.35**　任意实方阵都可以表示为两个对称矩阵的乘积．

> **解**　$\boxed{\surd}$．首先需要以下引理：
>
> > **引理 3.1**　对于任意方阵 $A\in\mathbb{F}^{n\times n}$，均存在可逆对称阵将 $A$ 相似到 $A^\mathsf{T}$．
>
> 先考虑 Jordan 块 $J$ 的情形．设可逆阵 $P$ 将 $A$ 相似到 $J = P^{-1}AP$．取 $Q = \begin{bmatrix} &&1 \\ &\ddots \\ 1 \end{bmatrix}$，则有 $Q^{-1} JQ = J^\mathsf{T}$．注意到 $Q = Q^\mathsf{T}$，令 $S = PQP^\mathsf{T}$，则有 $S^{-1}AS = (P^\mathsf{T})^{-1}Q^{-1}P^{-1}APQP^\mathsf{T} = (P^\mathsf{T})^{-1}Q^{-1}JQP^\mathsf{T} = (P^\mathsf{T})^{-1}J^\mathsf{T} P^\mathsf{T} = (PJP^{-1})^\mathsf{T} = A^\mathsf{T}$，并且 $S$ 是与 $Q$ 相合的可逆对称阵．一般地，将 $A$ 的 Jordan 标准型以各个 Jordan 块分块考虑即可．
>
> 现在有可逆对称阵 $S$ 使得 $S^{-1}AS = A^\mathsf{T} \implies S^{-1}A = A^\mathsf{T} S^{-1} \implies S^{-1}A = A^\mathsf{T} (S^\mathsf{T})^{-1}$，这说明 $S^{-1}A$ 是对称阵，于是 $A = S(S^{-1}A)$ 是两个对称矩阵的乘积． $\square$

&nbsp;

**题 3.36**　一个 $n$ 阶 $\lambda$ 矩阵可逆的充要条件是其行列式非零．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.37**　两个 $n$ 阶方阵具有相同的特征多项式和最小多项式，则两矩阵相似．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.38**　两个 $n$ 阶方阵具有相同的特征多项式，且它们的最小多项式等于特征多项式，则两矩阵相似．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.39**　设 $A$ 是 $n$ 阶可逆实矩阵，则 $A$ 一定可表示为正交矩阵和正定矩阵的乘积．

> **解**　$\boxed{\surd}$．这即是*极分解*． $\square$

&nbsp;

**题 3.40**　设矩阵 $A$ 满足满秩分解 $A=BC$，则齐次方程组 $Ax=0$ 与 $Cx=0$ 是同解方程组．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.41**　已知秩为 $r$ 的 $n$ 阶复方阵 $A$ 满足 $A^2=A$，若行列式 $|2I-A|=1$，则 $A$ 只能是单位阵．

> **解**　$\boxed{\surd}$．若不然，则 $\operatorname{rank} A < n$，$2I-A$ 有 $>1$ 的特征值，$|2I-A|>1$． $\square$

&nbsp;

**题 3.42**　设 $n$ 阶幂等矩阵 $A$ 满足满秩分解 $A=BC$，则 $CB$ 是单位矩阵 $I$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.43**　设 $A,B$ 都是 $n$ 阶方阵，则 $AB$ 和 $BA$ 具有相同的特征多项式．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.44**　正交矩阵的任一行或列同时乘以 $-1$ 时，得到的新矩阵仍为正交矩阵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.45**　酉矩阵的任一行或列同时乘以模为 $1$ 的任何数后，得到的新矩阵仍为酉矩阵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.46**　设 $H$ 是三阶 Householder 矩阵，$I$ 是二阶单位矩阵，则 $\operatorname{diag}(I, H, I)$ 不一定是 Householder 矩阵．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.47**　秩相等的两个长方 $\lambda$ 矩阵不一定相抵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.48**　设矩阵 $AB=BA$，则 $A,B$ 有公共的特征向量．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.49**　$n$ 阶 $\lambda$ 矩阵 $A(\lambda)$ 可逆的充要条件是 $A(\lambda)$ 的秩为 $n$．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.50**　设 $A$ 是 $m\times n$ 阶实矩阵，$x$ 是 $n$ 维列向量，则 $A^\mathsf{T} Ax=0$ 和 $Ax=0$ 是同解方程组．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.51**　设 $A$ 是正定 Hermite 矩阵，$B$ 是反 Hermite 矩阵，则 $AB$ 的特征值的实部为零．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.52**　设 $k$ 阶矩阵 $A$ 满足 $A^2=kA$，其中 $k\neq 0$，则 $A$ 必为单纯矩阵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.53**　设 $A$ 是非零实对称矩阵，则 $A$ 是幂等矩阵的充要条件是存在列满秩矩阵 $F$ 使得 $A = F(F^\mathsf{T} F)^{-1}F^\mathsf{T}$．

> **解**　$\boxed{\surd}$．由于 $A$ 实对称，存在正交矩阵 $Q$ 将 $A$ 相似到 $\operatorname{diag}(I_r, O)$，也即 $A = Q^\mathsf{T} \operatorname{diag}(I_r, O) Q$．将 $Q^\mathsf{T}$ 的前 $r$ 列作为 $F \in \mathbb{C}^{n\times r}$，有 $F^\mathsf{T} F = I_r$，这即是 $Q^\mathsf{T}$ 前 $r$ 列之间的内积．于是有 $A = Q^\mathsf{T} \operatorname{diag}(I_r, O) Q = F I_r F^\mathsf{T} = F I_r^{-1} F^\mathsf{T} = F(F^\mathsf{T} F)^{-1}F^\mathsf{T}$． $\square$

&nbsp;

**题 3.54**　设 $A, B$ 都是 Hermite 正定矩阵，则 $AB$ 相似于正定对角阵．

> **解**　$\boxed{\surd}$．首先存在可逆阵 $Q$ 使得 $A = Q^\mathsf{H} Q$，于是 $QBQ^\mathsf{H}$ 与 $B$ 相合，也为 Hermite 正定阵，从而存在酉方阵 $U$ 将 $QBQ^\mathsf{H}$ 相似到正定对角阵 $\Lambda$，即有 $\Lambda = U^\mathsf{H} QBQ^\mathsf{H} U$．于是 $B = Q^{-1}U\Lambda U^\mathsf{H} (Q^{-1})^\mathsf{H}$，从而 $AB = Q^\mathsf{H} Q Q^{-1} U \Lambda U^\mathsf{H} (Q^{-1})^\mathsf{H} = (Q^\mathsf{H} U) \Lambda (Q^\mathsf{H} U)^{-1}$ 与正定对角阵 $\Lambda$ 相似． $\square$

&nbsp;

**题 3.55**　若矩阵 $A\in\mathbb{C}^{m\times n}$，$A = PBQ$，其中 $P$ 为 $m\times k$ 列满秩矩阵，$Q$ 为 $s\times n$ 行满秩矩阵，则 $\operatorname{rank} A = \operatorname{rank} B$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.56**　任给非零列向量 $x\in\mathbb{R}^n$ 以及单位列向量 $z\in\mathbb{R}^n$（$n>1$），则存在 $n$ 阶正交矩阵 $Q$ 使得 $Qx = \Vert x\Vert_2 z$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.57**　任意 $n$ 阶实矩阵都可以相似对角化．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.58**　已知三阶矩阵 $A$ 的三个特征值为 $1, -1, 2$，若将 $A^{2n}$ 表示为 $A^{2n} = aA^2 + bA + cI$，则 $a+b+c=1$．

> **解**　$\boxed{\surd}$．注意到 $A$ 的最小多项式为 $(\lambda + 1)(\lambda - 1)(\lambda - 2) = \lambda^3 - 2\lambda^2 - \lambda + 2$，因此 $A^3 = 2A^2 + A - 2I$，等式左右保持各项的系数之和不变．$A^{2n}$ 系数为 $1$，可得 $a+b+c=1$． $\square$

&nbsp;

**题 3.59**　设 $F$ 是秩为 $r$ 的列满秩矩阵，$G$ 是秩为 $r$ 的行满秩矩阵，定义 $A=FG$，则 $A$ 的秩为 $r$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.60**　设 $A$ 是复方阵且满足 $A^k = 0$，其中 $k$ 是自然数，则 $A+I$ 的行列式为 $1$．

> **解**　$\boxed{\surd}$．考察 $A$ 的 Jordan 标准型． $\square$

&nbsp;

**题 3.61**　设 $A = \begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}$，则 $A$ 的正奇异值的个数为 $3$．

> **解**　$\boxed{\times}$．注意到 $-[1, 2, 3] + 2[4, 5, 6] = [7, 8, 9]$，因此 $A$ 非满秩，存在零奇异值． $\square$

&nbsp;

**题 3.62**　设 $A, B$ 都是秩为 $r$ 的 $m\times n$ 阶矩阵，则 $A^\mathsf{H} B$ 和 $AB^\mathsf{H}$ 都是秩为 $r$ 的矩阵．

> **解**　$\boxed{\times}$．$\operatorname{rank}(A^\mathsf{H} B) = \operatorname{rank}(B^\mathsf{H} A) = \operatorname{rank}(AB^\mathsf{H})$，但 $\operatorname{rank}(A^\mathsf{H} B)$ 不一定为 $r$． $\square$

&nbsp;

**题 3.63**　设 $A$ 是 Hermite 正定矩阵，$B$ 是 Hermite 半正定矩阵，则 $AB$ 的所有特征值都是非负的．

> **解**　$\boxed{\surd}$．证明类似题 3.54． $\square$

&nbsp;

**题 3.64**　设 $A, B$ 都是 Hermite 正定矩阵，则 $AB$ 的所有特征值都是正实数．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.65**　设 $A$ 是三阶方阵，且 $A^3 + A^2 - A - E = 0$，则 $A$ 的谱半径为 $1$．

> **解**　$\boxed{\surd}$．由于 $\lambda^3 + \lambda^2 - \lambda - 1 = (\lambda - 1)(\lambda + 1)^2$ 是 $A$ 的零化多项式，则 $A$ 的特征值只可能是 $\pm 1$，于是 $A$ 的谱半径为 $1$． $\square$

&nbsp;

**题 3.66**　设 $A = \begin{bmatrix}5\mathrm{i} & 1 & 2\mathrm{i}\\0 & -3 & 0\\0 & 2\mathrm{i} & 2\end{bmatrix}$，则 $A$ 的谱半径 $\rho(A) = 5$．

> **解**　$\boxed{\surd}$．$A$ 的特征值即是 $5\mathrm{i}, -3, 2$，因此 $A$ 的谱半径为 $\max\left\{ \Vert 5\mathrm{i}\Vert, \Vert -3\Vert, \Vert 2\Vert \right\} = 5$． $\square$

&nbsp;

**题 3.67**　方阵的任意一个特征值的代数重数不大于它的几何重数．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.68**　设 $n$ 阶方阵 $A$ 的特征值 $0$ 的代数重数是 $m$，其几何重数为 $d$，则矩阵 $A$ 的特征值 $0$ 所对应的 Jordan 块的个数为 $d$，矩阵 $A$ 的秩为 $n-d$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.69**　$n$ 阶方阵 $A,B$ 相似的充要条件是它们的不变因子相同．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.70**　设 $A$ 为 $m\times n$ 矩阵，$P$ 为 $m$ 阶酉矩阵，则 $PA$ 与 $A$ 有相同的奇异值．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.71**　$\begin{bmatrix}1&\mathrm{i}\\\mathrm{i}&1\end{bmatrix}$ 和 $\begin{bmatrix}\mathrm{i}&\mathrm{i}\\\mathrm{i}&1\end{bmatrix}$ 都是复对称矩阵，故均为正规矩阵．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.72**　已知 $A = \begin{bmatrix}1 & 1/2 & 1/3 \\ 1 & 2 & 1/2 \\ 1/2 & 1 & 2\mathrm{i}\end{bmatrix}$，则 $A$ 有 $3$ 个正的奇异值．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.73**　$A$ 是 $n$ 阶上三角阵，若矩阵 $A$ 的对角线元素全为零，则 $A$ 是 $n$ 阶幂零方阵．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.74**　若矩阵 $A,B$ 均为 Hermite 矩阵，则 $A,B$ 酉相似的充分必要条件是 $A,B$ 特征值相同．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.75**　$A$ 为 $n$ 阶方阵，则 $A^\mathsf{T}$ 和 $A$ 具有相同的 Jordan 标准型．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.76**　若两个 $n$ 阶矩阵 $A$ 和 $B$ 具有相同的特征多项式和相同的最小多项式，则 $A$ 和 $B$ 相似．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 3.77**　若线性齐次方程组 $Ax=0$ 有唯一解，其中 $A\in\mathbb{C}^{m\times n}$，$x\in\mathbb{C}^n$，则以下说法正确的是：（多选）

1. $A^\mathsf{H} A$ 是正定矩阵．
2. $N(A) = \left\{ 0 \right\}$．
3. $A$ 有左逆．
4. $N(A^\mathsf{H} A)$ 是零空间．

> **解**　$\boxed{\text{(1)(2)(3)(4)}}$． $\square$

&nbsp;

**题 3.78**　若 $A$ 是 $n$ 阶可逆实矩阵，则 $A$ 可表示成一个正交矩阵 $Q$ 与正定矩阵 $S$ 的乘积．

> **解**　$\boxed{\surd}$．这即是 QR 分解． $\square$

&nbsp;

**题 3.79**　设 $A = UDV^\mathsf{H}$ 为矩阵 $A$ 的一个奇异值分解，则 $U$ 的列向量为 $AA^\mathsf{H}$ 的特征向量．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.80**　设 $A\in\mathbb{C}^{m\times n}$，$U$ 和 $V$ 分别为 $m, n$ 阶酉矩阵，则 $UA$ 和 $AV$ 的奇异值与 $A$ 的奇异值完全相同．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.81**　若矩阵 $A$ 的特征值互不相同，且 $AB = BA$，则 $\lambda I - B$ 的初等因子均为一次因式．

> **解**　$\boxed{\surd}$．$A$ 的特征值互不相同故 $A$ 可对角化，$AB = BA$ 说明 $A$ 与 $B$ 可同时对角化，故 $B$ 可对角化，其特征多项式的根均是一重的． $\square$

&nbsp;

**题 3.82**　设 $A$ 与 $B$ 都是正交矩阵，如果 $|A| + |B| = 0$ 成立，则 $|A+B| = 0$．

> **解**　$\boxed{\surd}$．不失一般性地，设 $|A| = 1, |B| = -1$，注意到
>
> $$
> |I+BA^\mathsf{T}| = \begin{cases}
> |AA^\mathsf{T}+BA^\mathsf{T}| = |A+B||A^\mathsf{T}| = |A+B| \\
> |BB^\mathsf{T}+BA^\mathsf{T}| = |B||B^\mathsf{T}+A^\mathsf{T}| = -|A+B|
> \end{cases}
> $$
>
> 因此 $|A+B| = 0$． $\square$

&nbsp;

**题 3.83**　设矩阵 $A = A^2$，且 $A$ 可满秩分解为 $A = BC$，则 $CB = I$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.84**　设矩阵 $A$ 的满秩分解为 $A = BC$，则 $AX = 0$ 的一个充分必要条件是 $CX = 0$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 3.85**　设 $5$ 阶实对称矩阵 $A$ 满足 $(A-3I)^2(A+5I)^3=O$，$\operatorname{rank} (A-3I)=1$，则 $A$ 的特征多项式为$\underline{\qquad}$，$A$ 的最小多项式为$\underline{\qquad}$．

> **解**　$\operatorname{rank}(A-3I)=1 \implies \dim E(3) = 4$，且实对称阵必然可对角化，因此 $A$ 还有一重特征值 $-5$．故 $\varphi_A(\lambda) = \boxed{(\lambda + 5)(\lambda - 3)^4}$，$m_A(\lambda) = \boxed{(\lambda+5)(\lambda-3)}$． $\square$

&nbsp;

**题 3.86**　设 $A$ 是 $n$ 阶复矩阵，若 $A^3=A$，则 $A$ 必定是单纯矩阵．

> **解**　$\boxed{\surd}$．因为 $A$ 的零化多项式 $\lambda(\lambda+1)(\lambda-1)$ 无重根． $\square$

&nbsp;

**题 3.87**　若 $A^k = I$（$k$ 为正整数），则 $A$ 是单纯矩阵．

> **解**　$\boxed{\surd}$．因为 $A$ 的零化多项式 $\lambda^k - 1 = \prod_{i=0}^{k-1} (\lambda - \omega_k^i)$ 无重根． $\square$
